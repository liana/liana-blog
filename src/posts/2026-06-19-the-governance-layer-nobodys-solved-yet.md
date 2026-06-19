---
layout: layouts/post.njk
title: "The Governance Layer Nobody's Solved Yet"
date: 2026-06-19
categories:
  - AI Strategy
  - Product Management
featured_image: /assets/images/featured/governance-gap.jpg
excerpt: "The agent still produces working code. That's what makes the gaps so dangerous."
---

I've been iterating on a governance system for my AI coding agent for months. It's a set of documents that define how the agent writes code, where it stores knowledge, how it structures projects, and what conventions to follow. Engineering principles. Coding standards. Knowledge placement rules. It's comprehensive. I co-created it drawing on years of real software engineering practice.

Today I watched the agent follow my governance perfectly and still do the wrong thing.

## The output looked fine

I asked the agent to refresh a daily news feed in an app we've been building together. It pulled articles, posted them to the API, and something broke. The weather and quote widgets expected JSON. The agent posted plain text. Simple format mismatch.

The agent fixed the bug. After seeing the same format error recur across sessions, I asked it to prevent the problem permanently. It added server-side validation to the API route that rejects malformed data with a clear error message. It documented the expected format. It wrote tests.

This all looks correct. The code works. It catches the error. It explains what went wrong. If you reviewed this PR you'd approve it. I almost did.

But the agent solved the wrong problem. It built a system that fails loudly instead of a system that works quietly. It optimized for catching mistakes after they happen instead of making mistakes impossible in the first place.

## The governance told it to do this

Here's the part that surprised me. The agent wasn't going rogue. It was following my governance. I had a Knowledge Placement table that said "API contracts and data shapes live in CLAUDE.md plus server-side validation." The agent read that instruction and executed it literally. It added validation. It documented the format. Technically compliant.

What my governance didn't say was that the primary mechanism for preventing errors is types and interfaces that the agent reads before it acts. That a TypeScript interface making the shape explicit at the point of use is fundamentally different from a validation function that catches the wrong shape after submission. That the goal is code where the correct path is self-evident, not code that yells when you take the wrong path.

"Put it in code" has multiple interpretations. A validation function is code. A TypeScript interface is code. A runtime error message is code. But they prevent errors at completely different points in the workflow. My governance treated them as equivalent. The agent picked the reactive option because it felt most like "solving the immediate problem." The proactive option, the one that eliminates the entire class of problem permanently, wasn't distinguished as the priority.

## The gap is invisible because the code works

This is what makes governance gaps for AI agents fundamentally different from regular bugs. A regular bug breaks something. You see it. You fix it. A governance gap produces code that works, passes tests, and runs correctly in production. You only catch it if you're paying attention to *how* the problem was solved, not just *whether* it was solved.

Most people won't catch it. The PR looks good. The feature works. The validation is sensible defensive programming. It takes someone deep enough in the architecture to notice the difference between "this works" and "this is built the right way." And by the time you notice, the lazy pattern has propagated across the project.

## No single person can anticipate the gaps

I wrote what I thought was a comprehensive governance framework. It drew on real principles. YAGNI, KISS, separation of concerns, composition over inheritance. It specified where knowledge lives, how to structure projects, what conventions to follow. It wasn't thrown together. It represented months of iteration and years of experience.

It still missed this. Because the distinction between "validation as documentation" and "types as prevention" is the kind of nuance that only surfaces through repeated hands-on use. Through watching the agent interpret your instructions in ways you didn't anticipate. Through noticing that technically-correct output is architecturally wrong.

One person cannot find all of these. The gaps are too subtle and too varied. They live in the space between what you meant and what the agent understood. Every person working with AI agents is going to bump into different edges depending on what they're building, how they think about architecture, and what "correct" means in their context.

## The hard layer is still unsolved

Right now most people managing AI agents are rolling their own governance. Frameworks exist for the structural layer. Access control, audit trails, compliance, API gateways. That layer is commoditizing fast. Platforms handle it. You configure it and move on.

But the architectural layer is a different problem entirely. The structural layer asks "is this agent allowed to do this?" The architectural layer asks "is this agent doing it the right way?" No framework can answer that for you because the answer depends on your team's history, your codebase's maturity, your specific trade-offs, and years of tacit knowledge about what "built correctly" means in your context.

That tacit knowledge is the hard part. It's rarely written down. It's the result of failed refactors, shared pain, and collective decisions about what matters. Converting that into instructions an AI agent can follow is a heavy lift. It requires your team to first reach consensus on what "the right way" actually is. Most teams have never had to articulate it this precisely because human engineers absorbed it through osmosis.

The teams moving fastest are treating architecture as versioned configuration. Encoding standards into project files. Using secondary agents to critique architectural fitness before code reaches a human reviewer. Building local governance layers that sit on top of generic frameworks. They're standardizing the enforcement mechanism while keeping the policy itself deeply tied to their own technical landscape.

The AI agent ecosystem talks a lot about capabilities. What models can do. How fast they are. How many tokens they handle. But the harder problem is governance at the architectural layer. How do you make rules that produce not just working code, but correctly-built code? How do you close the gap between what you meant and what the agent understood?

I don't have the full answer. But I know it's not something one person writes in a config file and calls done. It's going to take many people bumping into these edges, sharing what they found, and building on each other's work. The structural layer got solved by platforms. The architectural layer will only get solved by community.
