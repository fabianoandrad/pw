self.addEventListener('push', () => {
   self.registration.sendNotification('Teste menssagem', {}); 
});