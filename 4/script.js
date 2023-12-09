var socket = io();
var selectedUsername = "Vlad";

function changeUsername() {
    selectedUsername = document.getElementById("username").value;
}

$('#form').submit(function () {
    var messageInput = $('#m');
    var message = messageInput.val().trim();

    if (message !== '') {
        socket.emit('chat message', { sender: selectedUsername, message: message });
        messageInput.val('');
    }

    return false;
});

socket.on('chat message', function (data) {
    // Check if both sender and message are defined before appending
    if (data.sender !== undefined && data.message !== undefined) {
        var sender = data.sender;
        var messageText = data.message;

        var messageContainer = $('<div>').addClass('message-container').html('<b>' + sender + ':</b> ' + messageText);

        // Dynamically assign different colors based on the username
        messageContainer.css('background-color', getUserColor(data.sender));

        $('#messages').append(messageContainer);
        autoScroll();
    }
});

function autoScroll() {
    var messagesContainer = $('#messages');
    messagesContainer.scrollTop(messagesContainer.prop('scrollHeight'));
}

function getUserColor(username) {
    // Customize the colors for different users here
    return username === 'Vlad' ? '#e6f7ff' : '#ffe6e6';
}
