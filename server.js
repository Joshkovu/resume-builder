
 const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // If using Node 18+, you can use global fetch

const app = express();
const PORT = 3000;

// Replace with your OpenAI API key
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';

app.use(cors());
app.use(bodyParser.json());

app.post('/analyze-resume', async (req, res) => {
  const { resumeText } = req.body;
  if (!resumeText) {
    return res.status(400).json({ error: 'No resume text provided.' });
  }

  try {
    const prompt = `You are a professional resume reviewer. Analyze the following resume and provide specific, actionable suggestions for improvement:\n\n${resumeText}`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // or 'gpt-4' if you have access
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    const data = await response.json();
    const suggestions = data.choices?.[0]?.message?.content || "No suggestions found.";
    res.json({ suggestions });
  } catch (error) {
    res.status(500).json({ error: 'Error communicating with OpenAI API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});