---
layout: layouts/post.njk
title: "The Agentic Repository"
date: 2025-12-17
categories:
  - Software Development
featured_image: /assets/images/featured/agentic-repository.jpg
excerpt: "Explore how repository architecture directly impacts AI agent effectiveness. Agents flourish in structured, intentional, predictable environments."
---

I was scrolling through my feed recently when I caught a piece by Jonathan Fulton. He argues that "agents flourish in structured, intentional, predictable environments—and they stumble in chaotic ones." – and humans do too!

It clicked for me because not long ago, I wrote about Why AI Still Needs a Pilot at the helm. In that post, I noted that the mistakes LLMs make are eerily similar to the ones I see from junior engineers: they tend to bite off more than they can chew, trying to solve a massive, sprawling problem in one go rather than breaking it down.

But reading Jonathan's piece made me realize these are two sides of the same coin.

We often see the AI trying to do too much and getting confused but we forget that in a disorganized, sprawling codebase, the AI has more to chew. When logic is tangled and boundaries are fuzzy, you can't just take a small bite. You're forced to swallow the whole mess just to understand a single function.

Throughout both my engineering and product careers, I've found that working in small, manageable chunks is the most consistent recipe for success. But to enable that for AI development, good repository hygiene and modular coding practices aren't just "nice-to-haves" for human readability anymore—they are the literal life-support systems for the AI agents we're starting to rely on.

## Where AI Stumbles

If we look closely at our repositories, especially older ones, they often suffer from the same issues that would overwhelm a human junior engineer:

**Monolithic Files:** When a single file tries to handle everything from database queries to UI logic, the AI loses the thread. It's too much context and too much noise.

**The Snowflake Problem:** When every module follows a different style or pattern. AI is a world-class mimic; if you don't give it a consistent pattern to follow, it will start hallucinating its own.

**Ambiguous Boundaries:** When we ignore the separation of concerns—think business logic littered with raw SQL queries or hardcoded environment logic—we remove the guardrails the AI needs to stay in its lane. Without a clear line between the "rule" and the "infrastructure," the agent will inevitably leak logic from one domain into the other, creating a fragile mess.

## Mentoring the Machine

So, how do we fix the environment? We need to create a repository architecture that is not just a place to store code, but as a map for an agent to follow.

**Functional Subcomponents**

In the past, we organized code by technical concerns—controllers in one folder, models in another, etc. To an AI "junior engineer," this is a scavenger hunt that leads to context fragmentation. Every time the agent has to "jump" across the repo to find a helper, it loses a bit of the "why" behind the task.

We've moved toward a vertical slice approach. Instead of grouping things by _what they are_, we group them by _what they do_. If we are building an Ingestion Pipeline, everything related to ingestion lives in one directory. By keeping the Ingestion Pipeline physically distinct from the Query Engine, we create a "hard boundary." This encapsulation of intent means that when the AI enters a folder, 90% of the context it needs is right there, preventing logic from "leaking" into unrelated domains.

**Modularity Within the Slice**

You might think that grouping by function leads to massive, unreadable files, but it's actually the opposite. Within those functional subcomponents, we enforce a strict Modular Architecture.

The "sweet spot" is keeping individual files small and focused—ideally under 200 lines—while the entire subcomponent stays between 2,000–5,000 lines of code. This allows the AI to load the _entire_ subcomponent into its context window to understand the big picture, while still having small, "bite-sized" files to modify. It's the best of both worlds: the agent sees the whole "neighborhood" (the subcomponent) but only has to renovate one "room" (the file) at a time.

**Convention as a Guardrail**

Even within a functional slice, a junior engineer needs a template. This is where frameworks like Ruby on Rails or Next.js shine, but with a twist: Namespacing.

By using namespaced directories (e.g., app/controllers/ingestion/), we get the best of both worlds. We maintain the "vertical slice" by grouping ingestion logic together, but we use the framework's opinionated conventions to make "similar things look similar." Because every controller in that slice inherits from a common Ingestion::BaseController, the AI has a perfect template to mimic. We aren't just giving the AI code; we're giving it a repeatable playbook.

```
app/
  controllers/
    ingestion/
      base_controller.rb
      parser_controller.rb
    billing/
      base_controller.rb
      invoice_controller.rb
  models/
    ingestion/
      source.rb
    billing/
      subscription.rb
```

**Embrace the Model Context Protocol (MCP)**

Essentially, MCP is a way to build standardized "wrappers" around your database, external APIs, and even the repository itself.

By indexing the repo or wrapping a database in an MCP server, you provide the AI with a specific set of tools—like "search_codebase" or "query_logs"—instead of making it guess. It moves the agent away from "vibe-based" guessing and toward a predictable, professional workflow where it has direct, structured access to the information it needs to succeed.

For example, you might want to build an MCP tool called `search_codebase`. Instead of the AI trying to read every file in the repo—which is slow and fills up its "memory"—it uses this tool to run a semantic search. It finds exactly the logic it needs across different folders in seconds. It moves the agent away from "vibe-based" guessing and toward a predictable, professional workflow where it has direct, structured access to the information it needs to succeed.

## Building the AI Infrastructure Stack

If you treat an AI agent like a web browser—something that just sits on top of your files—it will always be limited by its context window. To get senior-level results, you have to treat the AI as a **user of your infrastructure.** This requires building a "discovery layer" that allows the agent to onboard itself to a task.

A junior dev doesn't usually read every file in the repo; they often rely on documentation, database schemas, and tribal knowledge to learn their way around. For an AI, we provide this through Retrieval-Augmented Generation (RAG). Instead of manual searches, there are tools like Greptile or Bloop to crawl the repo and build a "Knowledge Graph." By exposing this index to the AI via a Model Context Protocol (MCP) server, the agent can call a tool like search_codebase to find a specific functional slice in seconds, rather than guessing which files to open.

The work for a Senior Lead isn't usually writing complex algorithms; it's configuration and curation. You stand up MCP servers that act as secure wrappers around your database, your Jira backlog, or your local terminal. This turns your infrastructure into a set of functions the AI can call.

I'll be honest: maintaining this stack is a new kind of work. You have to ensure your codebase is indexed, your permissions are set, and your documentation is clean enough for the AI to parse. But this is the ultimate force multiplier. You spend an hour "tuning the engine" so you don't have to spend ten hours acting as a human middleman for the AI.

## The Takeaway

We are moving from **writing code** to **curating the environment where code is written.**

At the end of the day, while these tools are incredibly powerful, they aren't a replacement for engineering discipline. If anything, they demand _more_ of it.

The technology is impressive, but human judgment remains the "pilot in the cockpit." We are the ones who set the boundaries, define the patterns, and ensure the environment is predictable enough for the AI to flourish. We provide the structure; the AI provides the scale.

The goal isn't just to write code faster—it's to build a codebase that is so clear and so intentional that any "junior," human or machine, can step in and contribute on day one.
