# Video Notes (Rails 8 + Turbo + Mux)

A simple “video notes” feature: take timestamped notes while watching a Mux-hosted video. Notes save via Turbo Streams (no full reload). Clicking a note jumps the player to that timestamp.

## Requirements
- Ruby
- Rails 8
- SQLite (default) 
- Node is **not** required (Tailwind via `tailwindcss-rails`)

## Setup

```bash
bin/setup
# or:
bundle install
bin/rails db:prepare


## Run locally

bin/rails s
bin/rails tailwindcss:watch
