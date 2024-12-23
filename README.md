# Kol-Starter

A starter project for integrating AI agents with Twitter functionality. This guide will help you set up the project and customize it for your needs.

## Getting Started

### Step 1: Install Dependencies
Install all required dependencies using `pnpm`:
```bash
pnpm i
```

### Step 2: Build the Project
Build the project to ensure all packages are correctly compiled:
```bash
pnpm run build
```

### Step 3: Configure the Character
Edit the default character file to define the personality and model provider:
- File: `/packages/core/src/defaultCharacter.ts`
- Update the `modelProvider` and customize other character properties as needed.

### Step 4: Environment Variables
Copy the example `.env` file to create your `.env` file:
```bash
cp .env.example .env
```

#### Required Environment Variables:
- **Twitter Integration:**
  - `TWITTER_USERNAME`
  - `TWITTER_PASSWORD`
  - `TWITTER_EMAIL`

- **Optional API Keys:**
  - OpenAI
  - Anthropic
  - Grok
  - Groq
  - OpenRouter

#### Additional Optional Variables:
To test dry-run tweet generation, add the following variable:
```bash
DRY_RUN_TWEET_COUNT={Number of tweets to test}
```

### Step 5: Rebuilding After Changes
If you make changes to the following files, rebuild the project:
- `/packages/core/src/defaultCharacter.ts`
- `/packages/client-twitter`

Rebuild the project from the main directory:
```bash
pnpm run build
```

### Notes
- Dry-run tweets are saved in `kol-starter/tweets.json`.
- Ensure all required API keys and credentials are set in the `.env` file before running the project.
