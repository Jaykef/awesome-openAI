const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "List 10 science fiction books:",
  temperature: 0.5,
  max_tokens: 200,
  top_p: 1.0,
  frequency_penalty: 0.52,
  presence_penalty: 0.5,
  stop: ["11."],
});
