# AIChat

AIChat lets you interact with two AI personalities:  
- **Vixby** - guesses your responses without using AI.  
- **ChatGPT** - uses AI via OpenRouter API to give intelligent replies.

---

## Setup of ChatGPT

1. Get your **OpenRouter API key** by signing up at [OpenRouter](https://openrouter.ai).  
2. Choose the **model name** you want to use (e.g., `gpt-4o-mini`).  
3. Open `gpt.js` and go to **lines 33–34**:

```javascript
const apiKey = 'API here';
const response = await fetch("Model name", {
  // ...
});
```
4. Replace 'API here' with your API key and "Model name" with your chosen model.
5. Save the file. Run the project - ChatGPT will now respond using your key.

## License
This project is licensed under the MIT License.
