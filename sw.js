self.addEventListener('push', function(e) {
   var options = {
    body: 'Notificação push!',
    icon: 'imagens/example.png',
    vibrate: [100, 50, 100],
    data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
    },
    actions: [
        {
            action: 'explorer',
            title: 'Explore this new world',
            icon: 'images/checkmark.png'
        },
        {action: 'close', title: 'Close', icon: 'images/xmark.png'}
       ]
   };
   e.waitUntil(self.registration.showNotification('Hello world', options));
   console.log('Passei em function push');
});