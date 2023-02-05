import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.Completion.create(
  model="text-davinci-003",
  prompt="ML Tutor: I am a ML/AI language model tutor\nYou: What is a language model?\nML Tutor: A language model is a statistical model that describes the probability of a word given the previous words.\nYou: What is a statistical model?",
  temperature=0.3,
  max_tokens=60,
  top_p=1.0,
  frequency_penalty=0.5,
  presence_penalty=0.0,
  stop=["You:"]
)
