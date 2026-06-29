# EchoFree News — Frontend

A React news aggregator app built to help users break out of the "echo chamber". Users follow tags to build a personalized feed, with an "Anti-Feed" mode that flips their content to display opposing perspectives — Republicans see Democrat news, Android users see iPhone coverage, and so on.

**Live demo:** [news-app-react-theta-six.vercel.app](https://echofreenews.com)  
**Backend repo:** [news_api_python](https://github.com/tslocom/news_api_python)

---

## Features

- **Tag-based feed:** — users follow topic tags and receive articles matched to their interests
- **Anti-Feed mode** *(in development)***:** a single switch flips the feed to show content from opposing tags, surfacing perspectives the user wouldn't normally see
- **AI-powered tag recommendations** *(in development)***:** Claude API (Anthropic) integration that detects implicit interests from reading and bookmarking behavior, recommends related tags, and adds them automatically after sustained engagement
- **Saved articles:** users can bookmark articles for later reading with duplicate prevention
- **Client-side routing:** React Router provides seamless navigation between Home and Saved views without page reloads
- **Tag filtering:** explicit user-controlled tag selection returns content discovery control to the reader, replacing opaque algorithmic recommendations

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React (Vite) |
| Language | JavaScript / JSX |
| Routing | React Router |
| Styling | Tailwind CSS |
| HTTP | Fetch API |
| Build Tool | Vite |
| Deployment | Vercel |
| Backend | Django REST API ([news_api_python](https://github.com/tslocom/news_api_python)) |

---

## Project Structure

```
news-app-react/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Home and Saved views
│   ├── App.jsx          # Root component and routing
│   └── main.jsx         # Entry point
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Getting Started (Local Development)

### Prerequisites
- Node.js 18+
- The backend API running locally — see [news_api_python](https://github.com/tslocom/news_api_python)

### Setup

```bash
# Clone the repo
git clone https://github.com/tslocom/news-app-react.git
cd news-app-react

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app runs at `http://localhost:5173` by default.

> **Note:** You'll also need the backend running. Follow the setup instructions in [news_api_python](https://github.com/tslocom/news_api_python) and run the scraper to populate the database before using the app.

---

## How It Works

### Standard Feed
Users select topic tags they want to follow. The app fetches articles from the backend API filtered by those tags and displays them in chronological order.

### Anti-Feed Mode *(in development)*
Following a tag triggers a call to the Claude API (Anthropic) which generates a semantic opposite/synonym for and saves it to the database as an "anti tag". When the user toggles the Anti Feed the regular feed reloads with articles from those opposing tags displaying content the user wouldn't normally encounter.

### Tag Recommendations *(in development)*
The app tracks reading, saving, and sharing behavior. When a user engages consistently with content from an unfollowed tag, the system surfaces article recommendations from that tag with a prompt explaining the connection. After a threshold of positive engagement, the tag is automatically added to the user's feed.

---

## Deployment

Deployed to **Vercel** via automatic GitHub integration. A `vercel.json` config handles client-side routing so React Router URLs resolve correctly on direct load.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## Related

- [Backend API — news_api_python](https://github.com/tslocom/news_api_python)
