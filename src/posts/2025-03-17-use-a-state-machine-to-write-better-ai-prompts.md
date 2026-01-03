---
layout: layouts/post.njk
title: "Use a State Machine to write better AI Prompts"
date: 2025-03-17
categories:
  - Software Development
featured_image: /assets/images/featured/state-machine.webp
excerpt: "Engineering-trained professionals excel at crafting AI prompts because they think in structured, linear pathways that AI can follow."
---

When non-engineers write prompts, we often see imprecise language that humans understand intuitively but confuses AI models. While a human can fill in contextual gaps, AI needs explicit instructions to perform effectively.

Engineering backgrounds provide a significant advantage when crafting effective AI prompts. Here's why:

- Engineers naturally think in structured, linear pathways that AI can follow
- They're trained to break complex systems into logical components
- They understand the importance of precise language and clear instructions

## What Makes a Good AI Prompt

Effective AI prompts share several key characteristics:

- **Specificity**: Replace vague terms like "good" or "better" with specific criteria
- **Structure**: Present information in a logical, sequential order
- **Context**: Provide relevant background information the AI needs to understand the task
- **Clear instructions**: Explicitly state what you want the AI to do
- **Examples**: Include demonstrations of desired outputs when possible

The difference between "Write me something about climate change" and "Explain three specific ways renewable energy is addressing climate change, focusing on technological innovations from the past decade" is enormous in terms of results.

## Why State Machines Make LLMs Think Better

Think of state machines as creating a mental roadmap for AI. Here's how they help:

- They break down complex problems into clear steps that both you and the AI can follow
- They prevent those frustrating logical leaps that make AI responses feel disconnected
- They create a structure that helps track where things might go wrong

We've found that this approach makes AI reasoning more transparent and reliable—though we're still working through some challenges with more complex problems.

## Real-World Application You Can Try

Here's a practical state machine setup for gathering user information:

**Information Collection & Verification Process:**

1. Welcome state: Introduce the purpose and set expectations
2. Information gathering state: Collect specific user details one by one
3. Verification state: Summarize collected information
4. Confirmation state: Get user approval or make corrections
5. Completion state: Proceed with the verified information

For example, a customer onboarding flow might look like:

```
State 1: "Welcome! We'll be asking for some information to customize your experience."
State 2: [Collects name] → [Collects email] → [Collects preferences]
State 3: "Here's what we've gathered: [Summary of all information]"
State 4: "Does this look correct?" (If yes → State 5, If no → return to State 2)
State 5: "Thank you! Your profile is complete."
```

## Create Your Own State Machine Prompts

Here's a simple template you can adapt:

```
"You are a reasoning agent. Follow these states to solve the problem:
State 1: Understand the problem completely
State 2: Break the problem into smaller parts
State 3: Solve each part step by step
State 4: Combine your solutions into a final answer

Problem: [Your problem here]

Now begin with state 1."
```

## What We're Learning Along the Way

We've discovered that balance is crucial. Too many states can overcomplicate things, while too few might not provide enough structure. The sweet spot depends on the complexity of your problem.

What reasoning challenges are you facing that might benefit from this structured method?
