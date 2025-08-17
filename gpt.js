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
    const apiKey = 'API here';
    const response = await fetch("Model name", {
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
