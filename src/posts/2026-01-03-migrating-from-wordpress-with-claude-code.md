---
layout: layouts/post.njk
title: "Migrating from WordPress to Static with Claude Code: A Journey of Persistence"
date: 2026-01-03
categories:
  - Software Development
excerpt: "How Claude Code and I migrated this entire blog from WordPress to 11ty. Spoiler: It wasn't straightforward, but we got there."
featured_image: /assets/images/featured/wordpress-migration.webp
---

I just finished migrating this entire website from WordPress to a static site built with 11ty (Eleventy) and Tailwind CSS, working alongside Claude Code. And I'm not going to sugarcoat it—it was a journey filled with unexpected detours, frustrating dead ends, and ultimately, a satisfying triumph.

## The Decision to Go Static

WordPress has served me well for years, but I wanted something faster, more secure, and frankly, simpler. Static sites eliminate database dependencies, reduce attack surfaces, and load instantly. Plus, having my content as Markdown files in a Git repository just feels right for someone who spends their days in code.

I decided to try something experimental: let Claude Code handle the migration. Not just as a coding assistant, but as a collaborative partner in rebuilding the entire site.

## The Migration: Smoother Than Expected

The content migration itself was surprisingly straightforward. We:

- Set up an 11ty project structure with Tailwind CSS
- Created layouts using Nunjucks templates
- Migrated 8 blog posts from WordPress to Markdown
- Rebuilt the homepage with a Featured section and Latest Posts grid
- Recreated the About page with my career journey
- Set up proper navigation, categories, and RSS feeds

Claude Code understood the WordPress export format, preserved all the content structure, and even maintained the visual design I wanted. Within a few hours, we had a working static site that looked clean and modern.

## The Deployment Nightmare

And then came deployment to DreamHost.

This is where things got interesting. And by "interesting," I mean we tried *six different deployment approaches* before finding one that worked.

### Attempt 1: FTP-Deploy-Action
"Let's use the popular FTP deployment action!"

```
Error: protocol: invalid parameter - you provided "sftp".
Try "ftp", "ftps", or "ftps-legacy" instead.
```

Right. DreamHost uses SFTP, not FTP. Moving on.

### Attempt 2: SFTP-Deploy-Action
"Okay, let's use an action specifically designed for SFTP."

The connection established. We saw the authentication succeed. And then... nothing. The action just hung. No error, no completion, just an eternal wait.

### Attempt 3: SCP-Action with Password Auth
"Let's try SCP instead of SFTP."

```
ssh: handshake failed: ssh: unable to authenticate,
attempted methods [none password], no supported methods remain
```

Authentication failure. Was our password wrong? We checked. It was correct. The problem? Our password contained an exclamation mark (`!`), which was being interpreted as a shell command by the deployment script.

### Attempt 4: SCP-Action with SSH Keys
"Fine, let's use SSH key authentication like proper engineers."

We generated a key pair, added it to GitHub Secrets, updated the workflow... and then discovered that DreamHost's SFTP-only users don't support SSH keys. You literally cannot add authorized keys to these accounts.

### Attempt 5: Rsync Deployments
"Rsync is battle-tested. This has to work."

```
Unexpected input(s) 'remote_password', valid inputs are
['switches', 'rsh', 'path', 'remote_path', 'remote_host',
'remote_port', 'remote_user', 'remote_key', 'remote_key_pass']
```

The action only supports SSH key authentication. Which we can't use. See Attempt 4.

### Attempt 6: Custom Rsync with sshpass
"Let's roll our own rsync command with password support."

```
rsync error: received SIGINT, SIGTERM, or SIGHUP (code 20)
```

The process was being killed. DreamHost's shared hosting environment doesn't seem to support rsync over SSH.

### The Solution: lftp

Finally, we tried `lftp`—a command-line FTP/SFTP client that's designed for exactly this scenario: file mirroring over SFTP on shared hosting.

But first, we had to fix the password issue. We changed the password from `!c4nh4zDreamHost` to `1c4nh4zWebsite`, eliminating the troublesome special character.

We tested locally first with an expect script:

```bash
#!/usr/bin/expect -f
set timeout 30
spawn sftp -o StrictHostKeyChecking=no lleahy@iad1-shared-b7-19.dreamhost.com
expect "password:"
send "1c4nh4zWebsite\r"
expect "sftp>"
send "pwd\r"
expect "sftp>"
send "ls -la\r"
expect "sftp>"
send "exit\r"
expect eof
```

It worked! Connection successful, we could see the `/home/lleahy/lianaleahy.com/` directory.

Then we updated the GitHub Actions workflow to use lftp:

```yaml
- name: Deploy via SFTP
  env:
    FTP_PASSWORD: ${{ secrets.FTP_PASSWORD }}
  run: |
    lftp -c "
    set sftp:auto-confirm yes;
    set ssl:verify-certificate no;
    open -u ${{ secrets.FTP_USERNAME }},$FTP_PASSWORD sftp://${{ secrets.FTP_SERVER }};
    mirror -R -e -v _site/ /home/lleahy/lianaleahy.com/;
    bye
    "
```

And it worked. Finally.

## The Subtle Bug

Even after deployment, we had one more issue: blog posts were displaying in the wrong order. "Putting It Together" (my oldest post from January 2025) was appearing first instead of last.

The culprit? Our `.eleventy.js` configuration was already sorting posts newest-first:

```javascript
eleventyConfig.addCollection("posts", function(collectionApi) {
  return collectionApi.getFilteredByGlob("src/posts/*.md")
    .sort((a, b) => b.date - a.date);  // newest first
});
```

But then in our templates, we were reversing the order:

```njk
{% set postslist = collections.posts | reverse %}
```

We were reversing an already-reversed list, ending up with oldest-first. The fix was simple: remove the `| reverse` filters. Sometimes the bugs that take the longest to find are the ones right in front of you.

## What I Learned

**1. Static site generators are powerful—when deployment works**

11ty is fantastic. The build is fast, the templates are clean, and having content in Markdown feels liberating. But the tooling around static site deployment is fragmented. What works for Netlify or Vercel doesn't necessarily work for traditional shared hosting.

**2. Special characters in passwords are a liability in automation**

Sure, they make passwords more secure against human attackers. But in CI/CD scripts where they're being passed through multiple layers of shell interpretation, they're asking for trouble.

**3. Test locally before debugging in CI**

We could have saved hours by testing the SFTP connection locally first. When we finally did, we immediately identified the password issue and confirmed the correct path. Local testing gives you faster feedback loops.

**4. Sometimes the old tools are the right tools**

We tried modern GitHub Actions with sleek interfaces and good documentation. What finally worked? `lftp`, a command-line tool from 2001. It was designed specifically for automated file transfers over FTP/SFTP, and it does exactly what it promises.

**5. AI pair programming works—with patience**

Claude Code never gave up. We tried six different approaches, and each failure taught us something. The AI adapted, suggested new strategies, and helped debug each issue methodically. This kind of persistent problem-solving is where AI collaboration shines.

## The Result

This site is now:
- **Fast**: Static HTML, no database queries, no PHP processing
- **Secure**: No WordPress vulnerabilities, no admin panel to hack
- **Version controlled**: Every change is in Git
- **Automatically deployed**: Push to main, and GitHub Actions handles the rest
- **Pleasant to maintain**: Writing in Markdown beats the WordPress editor any day

Was it worth the deployment headaches? Absolutely. I now have a site that's exactly what I want, with a deployment pipeline I understand completely (because I debugged it thoroughly).

## Try It Yourself?

If you're considering a similar migration:

- **For modern hosting** (Netlify, Vercel, Cloudflare Pages): Just use their built-in deployment. It'll be painless.
- **For traditional shared hosting**: Test your connection locally first. Use `lftp` if you're doing SFTP. Avoid special characters in passwords.
- **For content migration**: AI tools like Claude Code are genuinely helpful. They can handle the tedious parts while you focus on design decisions.

The code for this site is in a private repo, but the deployment workflow is straightforward enough that you could recreate it. And if you get stuck on deployment, remember: sometimes the solution is a 20-year-old command-line tool that just works.

Here's to persistence, problem-solving, and the satisfaction of finally seeing that green checkmark in GitHub Actions.
