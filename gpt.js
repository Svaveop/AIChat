let chatBox = document.getElementById('chat-box');
let inputField = document.getElementById('input');
let send = document.getElementById('Send');

inputField.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    process()
  }
});
send.addEventListener('click', function () {
  process()
});

async function process() {
  let userText = inputField.value.trim();

  if (userText != '') {
    chatBox.innerHTML += "<p><strong>You: </stong>" + userText + "</p>";
    inputField.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;


    let botReply = await getAIResponse(userText);
    chatBox.innerHTML += "<p><strong>AI: </strong>" + botReply + "</p>";
    chatBox.scrollTop = chatBox.scrollHeight;

  } else {
    alert('Please enter text to start to start chat.');
  }
}

async function getAIResponse(message) {
    const apiKey = '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';
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "I just want to discuss with you"
            },
            {
              role: "user",
              content: message
            }
          ],
          temperature: 0.7,
          max_tokens: 1000
        })
      });
      const data = await response.json();
      return data.choices[0].message.content.trim();
}