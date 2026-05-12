# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
# I like to eat pizza

## Project Overview

Ice Breaker is a Flask-based web application that generates personalized conversation starters by analyzing LinkedIn and Twitter profiles using LangChain and OpenAI.

## Development Commands

```bash
# Install dependencies
pipenv install

# Run the Flask application
pipenv run python app.py

# Format and lint
pipenv run black .
pipenv run isort .
pipenv run pylint [module_name]

# Tests (none currently exist)
pipenv run pytest .
```

## Architecture & Pipeline Flow

Entry point: `app.py` (Flask) → `ice_breaker.ice_break_with(name)` → returns `(Summary, TopicOfInterest, IceBreaker, photo_url)`.

Inside `ice_break_with`:
1. **Agent lookup**: `linkedin_lookup_agent` and `twitter_lookup_agent` each run a ReAct agent (GPT-4o-mini + Tavily search) to find the person's LinkedIn URL and Twitter username.
2. **Data scraping**: `scrape_linkedin_profile` calls Scrapin.io; `scrape_user_tweets_mock` fetches from a hardcoded GitHub Gist (live `scrape_user_tweets` exists but is not called).
3. **Three LangChain chains** (all using GPT-3.5-turbo, module-level singletons in `chains/custom_chains.py`): summary chain → interests chain → ice breaker chain. Each is a `PromptTemplate | llm | PydanticOutputParser` pipeline.
4. Output models (`Summary`, `TopicOfInterest`, `IceBreaker`) are Pydantic models with `to_dict()` for JSON serialization.

## Key Implementation Details

- Both agents pull `hwchase17/react` from LangChain Hub at runtime — requires internet access.
- `third_parties/twitter.py` initializes `twitter_client` (tweepy) **at module import time**, so Twitter env vars must be set even when using the mock function.
- `scrape_linkedin_profile` accepts `mock=True` to fetch from a GitHub Gist instead of calling Scrapin.io — useful for local development.
- `ice_breaker.py` currently hardcodes `scrape_user_tweets_mock`; swap to `scrape_user_tweets` for live Twitter data.
- LangChain agents run with `verbose=True` — expect detailed ReAct trace output in the console.

## Required Environment Variables (`.env`)

```
OPENAI_API_KEY
SCRAPIN_API_KEY
TAVILY_API_KEY
TWITTER_BEARER_TOKEN
TWITTER_API_KEY
TWITTER_API_KEY_SECRET
TWITTER_ACCESS_TOKEN
TWITTER_ACCESS_TOKEN_SECRET
```

Optional LangSmith tracing:
```
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY
LANGCHAIN_PROJECT=ice_breaker
```
