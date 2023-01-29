const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "You: What have you been up to?\nFriend: Watching old movies.\nYou: Did you watch anything interesting?\nFriend:",
  temperature: 0.5,
  max_tokens: 60,
  top_p: 1.0,
  frequency_penalty: 0.5,
  presence_penalty: 0.0,
  stop: ["You:"],
});
