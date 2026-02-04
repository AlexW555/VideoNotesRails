# Video Notes (Rails 8 + Turbo + Mux)

A simple “video notes” feature: take timestamped notes while watching a Mux-hosted video. Notes save via Turbo Streams (no full reload). Clicking a note jumps the player to that timestamp.

## Requirements
- Ruby
- Rails 8
- SQLite (default) 
- Node is **not** required (Tailwind via `tailwindcss-rails`)

## Demo
<video src="https://github.com/AlexW555/VideoNotesRails/blob/main/sdemo.mp4" controls></video>
https://github.com/AlexW555/VideoNotesRails/blob/main/sdemo.mp4



## Features
- Ability to add notes with or without a timestamp of a video
- Click on a timestamp to jump to video

## Like to add/tried
- Auto timestamp without clicking button,
    - encountered a bit of a race condition
- Video timeline stamps to show when notes have been added
- More videos/Move model to videos

## Setup

```bash
bin/setup
# or:
bundle install
bin/rails db:prepare

Create an .env (see .env.example)

## Run locally

bin/rails s
bin/rails tailwindcss:watch
