---
layout: layouts/post.njk
title: "Your AI Agent Has Amnesia"
date: 2026-06-19
categories:
  - AI Strategy
  - Product Management
featured_image: /assets/images/featured/agent-amnesia.jpg
excerpt: "Every session starts from zero. If your project can't teach a stranger everything it needs to know, your AI workflow has a single point of failure: you."
---

I broke my own app today. Or rather, my AI coding agent did. It rebuilt a feature it created yesterday and got the data format wrong. The weather widget rendered nothing. The quote box disappeared.

The fix took two minutes. But the question it raised took the rest of the morning.

## You built this yesterday and already forgot

Here's what happened. I have a daily digest app that pulls news, weather, and quotes into a dashboard. The weather and quote widgets expect their data as JSON strings. Yesterday the agent posted correctly formatted JSON. Today it refreshed the data and posted plain text instead. Same agent. Same codebase. Different session. Broken feature.

The agent didn't make a mistake exactly. It just didn't know. Every session starts from scratch. The model that built the parser yesterday has no memory of building it. It reads the code, infers how things work, and acts on that inference. If the inference is easy, it gets it right. If it requires knowledge that only lived in yesterday's conversation, it guesses.

And guesses break things.

## "I'll just write it in my notes" doesn't scale

My first instinct was to save the format requirements in my personal memory system. A note saying "weather must be JSON with temp, high, low, condition." That works for me, in my sessions, on my machine.

But what happens when I share this repo? What happens when a different model picks it up? What happens in six months when the note gets cleaned up? The knowledge disappears and the bug comes back.

The real question isn't "how do I remember this?" It's "how does the repository remember this?"

## The repo has to teach strangers

Every piece of knowledge an agent needs to operate correctly must be discoverable from the repo itself. Not from conversation history. Not from personal notes. Not from your head.

This forces you to think about where different kinds of knowledge belong.

**Runtime configuration** goes in code. Import it, don't recall it. If the agent needs a list of news sources at execution time, that's a typed config file, not a memory.

**Data contracts** go in validation. If a field must be JSON, the API rejects non-JSON with a clear error. The agent doesn't need to remember the format. It tries, fails, reads the error, and self-corrects. The system teaches the system.

**Interaction behaviors** go in a dedicated doc. How does this panel open? What dismisses it? What's the animation? These get read on demand when someone touches the UI.

**Architecture signposts** go in your root config file. But only as an index. One line each pointing to where knowledge lives. The actual content lives elsewhere.

## You need a "ship it" checklist

This realization led to a simple workflow we now run every time a feature is done. Before calling it shipped, verify that the repository could teach a complete stranger everything it needs to know.

Does the build pass? Does it look right visually? Is the feature described in the product doc? Are interaction behaviors written down? Do the signposts point to any new files created? Is everything committed and pushed?

One test holds the whole thing together. If a brand new agent cloned this repo tomorrow with zero prior context, could it operate the system correctly? If not, the repo is incomplete. That's the bug to fix.

## Documentation isn't a follow-up task

Working with AI agents inverts a habit most of us have. We carry context in our heads. We know the widget expects JSON because we wrote the parser. We know the panel slides from the left because we debated it last week. We know the news sources because we picked them.

None of that implicit knowledge survives a session boundary.

The discipline is to externalize immediately. Not later. Not when you get around to it. As part of finishing the feature. If you didn't document it, you didn't ship it.

The payoff isn't just for the agent. It's for you in six months. It's for your teammate who picks up the project. It's for the next model that's three generations smarter but equally amnesiac.

Your agent has amnesia. Make sure your repo doesn't.
