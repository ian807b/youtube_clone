# YouTube Clone

A YouTube clone application is deployed on Netlify. This project demonstrates React fundamentals, API integration, and responsive design principles.

## Project Overview

This application replicates core YouTube functionality including:

- Browsing trending videos
- Searching for videos by keyword
- Video playback with related video recommendations
- Channel information display
- Responsive design for various screen sizes

## Tech Stack

- **React** - Frontend framework
- **React Router** - Client-side routing
- **TanStack Query (React Query)** - Data fetching and state management
- **Tailwind CSS** - Styling
- **YouTube Data API** - Video data source
- **Netlify** - Deployment

## Development Notes

- The project includes a mock YouTube client (`MockYoutubeClient`) to avoid hitting API rate limits during development
- Video descriptions from search results are truncated by the YouTube API itself, not by the application code
- A potential enhancement would be implementing a separate API call to fetch full video details when viewing a specific video

## Live Demo

The project is deployed and accessible at [https://bright-bunny-e38c91.netlify.app/].

## Running Locally

If you want to run this project locally:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file with your YouTube API key: `VITE_YOUTUBE_API_KEY=your_key_here`
4. Run `npm run dev` to start the development server

## Learning Outcomes

This project demonstrates:
- Working with external APIs
- State management in React
- React Router for navigation
- Responsive design with Tailwind CSS
- Data fetching and caching with React Query