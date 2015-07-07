var socket = io.connect('http://104.236.137.18:58080/');
socket.on('notice message', function(data) {

    chrome.notifications.clear("wisebirds-noti", function(){});

    chrome.notifications.create(
        'wisebirds-noti',{   
            type: 'image', 
            title: "★공지 사항★",
            message: data.message,
            iconUrl: 'images/wise-logo.png',
            imageUrl: "images/z.jpg"
        },
        function(data) {

        }
    );
});

chrome.notifications.onClosed.addListener(function(data){
    //INIT
    chrome.notifications.clear("wisebirds-noti", function(){});
});

chrome.notifications.onClicked.addListener(function(data){
    //INIT
    chrome.notifications.clear("wisebirds-noti", function(){});
});