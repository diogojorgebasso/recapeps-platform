const { gemini15Flash, googleAI } = require('@genkit-ai/googleai');
const { genkit } = require('genkit');
const { enableFirebaseTelemetry } = require('@genkit-ai/firebase');
enableFirebaseTelemetry();

const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash, 
});

const helloFlow = ai.defineFlow('helloFlow', async (name) => {
  // make a generation request
  const { text } = await ai.generate(`Hello Gemini, my name is ${name}`);
  console.log(text);
});

helloFlow('Chris');