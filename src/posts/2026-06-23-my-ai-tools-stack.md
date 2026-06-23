---
layout: layouts/post.njk
title: "The Tools I Use, The Tools I Build"
date: 2026-06-23
categories:
  - AI Strategy
  - Tools
featured_image: /assets/images/featured/ai-tools-stack.jpg
excerpt: "My AI stack isn't just a list of things I subscribe to. It's a set of tools I use, a foundation I maintain, and a daily driver I built myself."
---

I've been meaning to write about my AI tools stack for a while. Not because the specific tools are all that interesting on their own, but because the way they fit together tells a story about how I work and what I've learned about directing AI coding agents over the past year.

This isn't a static list. Some of these could change next month. What matters more than the specific tools is the system I've built around them and the feedback loop that keeps improving it.

## What I actually use every day

My primary tool is Claude Code. It runs in my terminal, has access to my files, and handles the bulk of my coding, writing, and thinking work. AWS Bedrock is my AI infrastructure layer for anything that needs to run as a service rather than in my terminal.

I also use Gemini for quick lookups and brainstorming because it pulls context directly from my Gmail, Docs, and Calendar. I also like switching to it to get a different perspective from a different model. Multiple models create a system of checks and balances. They minimize individual model bias and reduce the risk of hallucinations. When I prompt two different architectures to solve the same task, I can compare their outputs and spot inconsistencies in logic or factual data. It forces me to look at a problem from varied angles instead of relying on the potential blind spots of a single training set. When both models arrive at similar conclusions, I have more confidence in the result.

The rest of the infrastructure:

- **GitHub + GitHub Actions** for version control and CI/CD
- **Dreamhost** for blog hosting, auto-deployed via GitHub Actions on every push to main
- **Next.js, React, TypeScript, Tailwind, Prisma, and SQLite** for the apps I build
- **Eleventy** for this blog
- **Node.js via Homebrew** on macOS
- **GRASP MCP** for Outlook email and calendar access
- **Slack MCP** for workspace messaging
- **Notion MCP** for notes

## The governance layer

I maintain a repository that I named ai-governance that shapes how Claude Code behaves across every project I touch. It's organized into separate files, each covering a distinct domain. Coding conventions define my preferred stack, principles, and quality gates. A phased product build process walks through PRD modules, technical architecture, data structures, and execution in a specific order with lock-down criteria at each step. Writing voice profiles control tone depending on context. A professional voice for documents and proposals. A casual voice for Slack messages. A blog voice for posts like this one.

The repo's files are symlinked into Claude Code's global rules directory, which means they load automatically into the context window at the start of every session. It doesn't matter which project I'm in. The principles, the voice, the conventions all travel with me. This is different from a project-level CLAUDE.md file, which only applies to one project. The governance layer is universal. CLAUDE.md files in my individual projects know to reference it when building features, writing reports, or drafting posts.

Why a repo with separate files instead of one large CLAUDE.md? Clear file boundaries help the AI apply the right rules to the right task. When I'm writing a blog post, it maps cleanly to the voice file. When I'm building a feature, it maps to conventions and the build process. Separate files reduce the chance of bleeding concerns across domains. And for me, they're easier to maintain, update one domain without risking others, and track changes in git.

This didn't happen overnight. The governance repo is the accumulated result of months of working with Claude Code and discovering what it gets wrong without constraints. Every rule in there exists because I watched the tool make a specific class of mistake and figured out how to prevent it structurally.

## My Daily Digest

One of the more important parts of my daily workflow is integrating many tools together into a single custom app.

My Daily Digest is an app I built entirely with Claude Code. Every morning, it pulls my Outlook emails, calendar events, Slack messages, and news into a single view. Instead of context-switching between four different apps to figure out what my day looks like, I open one screen and get the full picture. It's a local-first Next.js app backed by SQLite, and it runs on my machine.

And because I use these tools every day, every rough edge is something I feel. Every missing feature is something I notice. I'm constantly adding or changing features. Improving the UI, introducing action items, emailing my boss a summary. Every time I add a feature, I discover something new about how to direct an AI coding agent effectively. I learn what it misunderstands about decomposition and separation of concerns. I learn where it over-engineers and where it cuts corners. I learn how to encode a principle so that it actually sticks rather than getting ignored two turns later.

The governance repo is the artifact of that learning loop. It's not a set of preferences I wrote once. It's a living document that evolves every time I watch Claude Code make a mistake and figure out how to prevent it from happening again.

The tools in my stack will change. But the pattern stays the same. Use the tools, build with the tools, learn from what breaks, and encode that learning so it compounds over time.
