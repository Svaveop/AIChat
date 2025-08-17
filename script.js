let chatBox = document.getElementById('chat-box');
let inputField = document.getElementById('input');
let send = document.getElementById('Send');


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

function getAIResponse(message) {
  let msg = message.toLowerCase();
  if (msg.includes('hi') || msg.includes('hello') || msg.includes('barev')) {
    const responses = {
      1: "Hi there! How are you feeling today?",
      2: "Hey! How's your day going today?",
      3: "Hello! How are you doing today?",
    };
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return responses[randomNumber];
  } else if (msg.includes('how are you') || msg.includes('feel') || msg.includes('whats up')) {
    return `I'm fine, what about you?`;
  } else if (msg.includes('wbu') || msg.includes('what about you') || msg.includes('how about you')) {
    return `I'm fine too, thank you!`;
  } else if (msg.includes('can you do') || msg.includes('what you offer me') || msg.includes('what do you do')) {
    return `I'm here to help you. Ask what you want`;
  } else if (msg.includes('game') || msg.includes('joy') || msg.includes('play')) {
    return `Sorry, I don't have games to play`;
  } else if (msg.includes('wrong') || msg.includes('false') || msg.includes('not right')) {
    return `Sorry for the mistake, try later`;
  } else if (msg.includes('created') || msg.includes('create you')) {
    return `I'm created in TUMO by Vahe`;
  } else if (msg.includes('laugh') || msg.includes('joke') || msg.includes('smile')) {
    const responses = {
      1: "Why don't skeletons fight each other? - They don't have the guts!",
      2: "What do you call fake spaghetti? - An impasta.",
      3: "Why was the math book sad? - It had too many problems.",
      4: "What do you call cheese that isn’t yours? - Nacho cheese.",
    };
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    return responses[randomNumber];
  } else if (msg.includes('roll') || msg.includes('dice') || msg.includes('random')) {
    const responses = {
      1: "You got number 1",
      2: "You got number 6",
      3: "You got number 5",
      4: "You got number 4",
      5: "You got number 3",
      6: "You got number 2"
    };
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return responses[randomNumber];
  } else if (msg.includes('russian roulette') || msg.includes('kill') || msg.includes('dangerous')) {
    const responses = {
      1: "You got shoot (Chance ~16,7%)",
      2: "Lucky you! (Chance ~83,3%)",
      3: "Lucky you! (Chance ~83,3%)",
      4: "Lucky you! (Chance ~83,3%)",
      5: "Lucky you! (Chance ~83,3%)",
      6: "Lucky you! (Chance ~83,3%)"
    };
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return responses[randomNumber];
  } else if (msg.includes('magic') || msg.includes('8-ball')) {
    const responses = {
      1: "Yes",
      2: "No",
      3: "Maybe",
      4: "Ask again",
    };
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    return responses[randomNumber];
  } else if (msg.includes('rock') || msg.includes('scissors') || msg.includes('paper')) {
    const responses = {
      1: "Rock",
      2: "Paper",
      3: "Scissors",
    };
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return responses[randomNumber];
  } else if (msg.includes('real') || msg.includes('not fake')) {
    return `As real as your Wi-Fi signal — sometimes strong, sometimes gone.`;
  } else if (msg.includes('where from') || msg.includes('country') || msg.includes('place') || msg.includes('location') || msg.includes('geo')) {
    return `I'm from the cloud — somewhere between 1s and 0s.`;
  } else if (msg.includes('age') || msg.includes('birth')) {
    return `I'm timeless... but I was compiled recently!`;
  }
  else {
    return 'Sorry! No prepared answer yet';
  }

}
