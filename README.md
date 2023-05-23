# Imigrasi Q&A frontend

Backend is at https://github.com/raphaelmerx/imigrasi-bot

Setup:
* Install deps: `npm install`
* Create a `.env` file with the backend variables
```
NEXT_PUBLIC_WS_BACKEND_URL="ws://127.0.0.1:9000"
NEXT_PUBLIC_BACKEND_URL="http://127.0.0.1:9000"
```
* For development: `npm run dev`
* To deploy, e.g. using Vercel: `npm run build`
