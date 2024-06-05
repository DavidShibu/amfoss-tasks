window.onload = function() {
    display('Hello. WELCOME TO VROOM<br>I am your personal assistant GOJO. <br>Please select one of the buttons below to get started.');
};

function display(message, isTyping = false) {
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

    const userText = userInput.value.toLowerCase();
    userInput.value = '';

    chatBox.scrollTop = chatBox.scrollHeight;

    const typingIndicator = display('', true);

    setTimeout(() => {
        typingIndicator.remove();

        if (userText === 'hai') {
            display('Hai..Welcome to Vroom. The one stop to book bikes <br> I am your personal chatBot<br>Please select any of the buttons below to get started.');
        } else {
            display(`Apologies. I cannot understand that. Your response is shared with our team. They will contact you soon<br> If you have any queries please select any of the buttons below.`);
        }
    }, 1000);
}

function handleOption(option) {
        const chatBox = document.getElementById('chat-box');
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.innerHTML = `<div class="message-content">${option}</div>`;
        chatBox.appendChild(userMessage);
    const typingIndicator = display('', true);
    
    setTimeout(() => {
        typingIndicator.remove();
        let response = '';
        if (option === 'How to book') {
            response = 'Step 1: Login <br> Step 2: Go through the bikes in the main window or click on vehicles tab to get the full list. <br> Step 3: Press the check out button <br> Step 4: Select the pickup location and duration. <br> Step 5: Make the payment';
        } else if (option === 'Terms and Conditions') {
            response = `a. Rental Period: The rental period begins at the time of bike checkout and ends when the bike is returned to the designated rental location.<br>
            b. Late Returns: Any bike returned after the agreed-upon time will incur additional charges. The renter agrees to pay these additional fees as specified in the rental agreement.<br>
            c. Renter's Responsibility: The renter assumes full responsibility for any damage, loss, or theft of the bike during the rental period. The renter agrees to cover all repair or replacement costs.`;
        } else if (option === 'Pickup and drop off details') {
            response = `To pickup, show the token number at the pickup location. To drop off, show the token number again at the nearest drop-off location.`;
        } else if (option === 'Issue with payments') {
            response = `If you encounter any problem with the payments please feel free to contact us at the given email id: help@vroom.com`;
        } else if (option === 'Pickup Locations') {
            response = `1. Hyderabad<br> 2. Kayamkulam<br> 3. Kochi<br> 4. Karunagapally`;
        }

        display(response);
    }, 1000);
}

