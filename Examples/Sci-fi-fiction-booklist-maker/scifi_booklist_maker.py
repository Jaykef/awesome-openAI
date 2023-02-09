import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.Completion.create(
  model="text-davinci-003",
  prompt="List 10 science fiction books:",
  temperature=0.5,
  max_tokens=200,
  top_p=1.0,
  frequency_penalty=0.52,
  presence_penalty=0.5,
  stop=["11."]
)
