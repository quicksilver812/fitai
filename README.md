# FitAi - Your Personal AI Workout Planner

FitAi is an AI-powered fitness assistant that generates personalized workout plans tailored to your fitness goals, preferences, and level. Built with OpenAI's GPT and modern web technologies, FitAi aims to revolutionize fitness planning with intelligent, dynamic, and user-friendly features.

## Features

* **Personalized Plans**: AI-generated workout routines customized for your goals, schedule, and fitness level.
* **Real-Time Adjustments**: Modify plans dynamically based on progress and user feedback.
* **Interactive Chat Interface**: Engage with FitAi in a user-friendly chat environment.
* **Markdown Support**: View responses with rich formatting for better readability.
* **Deployable Anywhere**: Easily deploy the application to cloud platforms like Netlify for free.

## Quick Start

### Prerequisites

1. **Node.js**: Install Node.js (version 16+ recommended).
2. **OpenAI API Key**: Obtain an API key from OpenAI.

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/quicksilver812/FitAi.git
cd FitAi
```

2. Install dependencies:
```bash
npm install
```

3. Create an `.env` file in the root directory and add your OpenAI API key:
```plaintext
OPENAI_API_KEY=your-api-key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`.

## Deployment

Deploy FitAi to Netlify using the following steps:

1. Push your code to a GitHub repository.
2. Log in to Netlify and select "New Site from Git."
3. Connect your repository and configure the build settings:
   * Build Command: `npm run build`
   * Publish Directory: `dist`
4. Add your OpenAI API key in the Netlify environment settings.
5. Deploy the site and share the URL with users.

## Example Interaction

**User**: "I want a workout plan for muscle gain. I can train 5 days a week at the gym."

**FitAi**:
```plaintext
Here's your workout plan:

Day 1: Upper Body Strength
- Bench Press: 4 sets of 8 reps
- Dumbbell Rows: 4 sets of 10 reps
- Push-Ups: 3 sets of 15 reps

Day 2: Lower Body Strength
- Squats: 4 sets of 8 reps
- Lunges: 3 sets of 12 reps per leg
- Calf Raises: 4 sets of 20 reps
...
```

## Technologies Used

* **OpenAI GPT**: Powers the AI-based workout planning.
* **React & TypeScript**: Provides a robust and scalable front-end framework.
* **Tailwind CSS**: Offers modern and responsive styling.
* **Netlify**: Enables fast and secure deployment.

## Contribution

We welcome contributions to enhance FitAi. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

## License

FitAi is licensed under the MIT License. Feel free to use and modify it for personal or commercial use.

## Contact

For questions or support, reach out via email at allendsouza812@gmail.com.