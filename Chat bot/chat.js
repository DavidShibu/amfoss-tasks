window.onload = function() {
    displayBotMessage('Hello. How may I help you?');
};

function displayBotMessage(message, isTyping = false) {
    const chatBox = document.getElementById('chat-box');
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    
    if (isTyping) {
        botMessage.innerHTML = `<div class="message-content"><div class="typing-indicator"></div><div class="typing-indicator"></div><div class="typing-indicator"></div></div>`;
    } else {
        botMessage.innerHTML = `<div class="message-content">${message}</div>`;
    }
    
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    return botMessage;
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    if (userInput.value.trim() === '') {
        return;
    }

    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerHTML = `<div class="message-content">${userInput.value}</div>`;
    chatBox.appendChild(userMessage);

    // Clear input
    const userText = userInput.value.toLowerCase();
    userInput.value = '';

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Show typing indicator
    const typingIndicator = displayBotMessage('', true);

    // Simulate bot response
    setTimeout(() => {
        typingIndicator.remove();

        if (userText === 'hello') {
            displayBotMessage('<a href="https://www.youtube.com" target="_blank">Check out this link to YouTube</a>');
        } else {
            displayBotMessage(`You said: ${userText}`);
        }
    }, 1000);
}

function handleOption(option) {
    const typingIndicator = displayBotMessage('', true);

    setTimeout(() => {
        typingIndicator.remove();

        let response = '';
        if (option === 'weather') {
            response = 'Sunny. 30 degrees';
        } else if (option === 'order') {
            response = `Click the link below and scroll through the available bikes.<a href="/home/mrbeast/UIDDDD/Bike_Rental/proj/index.html" target="_blank">Click here</a>`;
        }

        displayBotMessage(response);
    }, 1000);
}
