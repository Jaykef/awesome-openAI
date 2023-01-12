# Awesome-openAI
A curated list of all things awesome about OpenAI

<img src="banner.png" />

### OpenAI General Resources
<ul>
  <li><a href="https://beta.openai.com/">OpenAI Overview</a></li>
  <li><a href="https://beta.openai.com/docs/introduction">OpenAI API Documentation</a></li>
  <li><a href="https://beta.openai.com/examples">OpenAI Examples</a></li>
  <li><a href="https://beta.openai.com/playground">OpenAI Playground</a></li>
</ul>

### Quick Start
<ul>
  <li><a href="https://beta.openai.com/docs/quickstart">OpenAI Quick Start</a></li>
</ul>

### Models
<ul>
  <li><a href="https://beta.openai.com/docs/models/gpt-3">GPT-3</a></li>
  <li><a href="https://beta.openai.com/docs/models/codex">Codex</a></li>
  <li><a href="https://beta.openai.com/docs/models/content-filter">Content filter</a></li>
</ul>

### Build applications
<ul>
  <li><a href="https://beta.openai.com/docs/guides/completion">Text completioan</a></li>
  <li><a href="https://beta.openai.com/docs/guides/images">Image generation</a></li>
  <li><a href="https://beta.openai.com/docs/guides/code">Code completioan</a></li>
  <li><a href="https://beta.openai.com/docs/guides/embeddings">Embeddings</a></li>
  <li><a href="https://beta.openai.com/docs/guides/fine-tuning">Fine-tuning</a></li>
</ul>

### API References
To install the official Python bindings, run the following command:
```
pip install openai
```
To install the official Node.js library, run the following command in your Node.js project directory:

```
npm install openai
```
#### Authentication
The OpenAI API uses API keys for authentication. Visit your <a href="https://beta.openai.com/account/api-keys">API Keys</a>  page to retrieve the API key you'll use in your requests.

Remember that your API key is a secret! Do not share it with others or expose it in any client-side code (browsers, apps). Production requests must be routed through your own backend server where your API key can be securely loaded from an environment variable or key management service.

All API requests should include your API key in an Authorization HTTP header as follows:
```
Authorization: Bearer YOUR_API_KEY
```
