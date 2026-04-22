# Code Sage AI

This is a Next.js application that uses Genkit and Google's Gemini model to generate code from natural language prompts.

## "Installing" and Running Locally

This is a web application. To "install" it means to set it up for local development on your machine.

### Prerequisites

- Node.js (v18 or later)
- An API key for the Gemini API. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### 1. Install Dependencies

Install the necessary packages using npm:

```bash
npm install
```

### 2. Set up Environment Variables

The application needs your Gemini API key to work. The `.env` file in the root of the project has been prepared for you. Just add your key:

```
GEMINI_API_KEY="YOUR_API_KEY_HERE"
```

**Important:** Remember to replace `"YOUR_API_KEY_HERE"` with your actual key. This is the most common reason for installation problems.

### 3. Run the Application

You can run the application with the following command:

```bash
npm run dev
```

This will start the Next.js development server, usually on `http://localhost:9002`.

### 4. (Optional) Use the Genkit Developer UI

Genkit comes with a developer UI that lets you inspect and debug your AI flows. To use it, run the following command in a separate terminal:

```bash
npm run genkit:watch
```

This will start the Genkit UI, usually on `http://localhost:4000`.

## Troubleshooting

If you see errors when running the application, please check the following:

- **Missing API Key**: The most common error is related to the `GEMINI_API_KEY`. Make sure you have a `.env` file in the project's root directory and have placed your API key inside it.
- **Node.js Version**: Ensure you are using Node.js version 18 or later. You can check your version by running `node -v` in your terminal.

Now you have the AI application "installed" and running on your local machine!
