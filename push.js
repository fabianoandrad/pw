var push = require('web-push')

let vapidKeys = {
    publicKey: 'BOWQ7tSJgScHu-3gj4YT0mhVi9wFIfERi_xcGHlgHqvoeWVOvLENC_eRwyU9nXldAHoo-YyMCRVCW_EgFyOIH1E',
    privateKey: 'tsMw4VZ1hJoGR5KiHwhXpzqoYjFnYEBfOh2ZgmE95nY'
  }

  push.setVapidDetails('mailto:test@code.com.br', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cTs09R2xpXU:APA91bEGeXqkkf6IfPT8OCrMLNiy1vtMQF0HeEk6tRRokcoK1fILNWM3YFtG1HwFL2Tg5jPEnV4gRd6vRqLvXtylBVP5pUuLhbM51_I-RGTUmZBjAPybi53szw6shonSclfX-u6SXStz","expirationTime":null,"keys":{"p256dh":"BNQv8OydMs3GFIevovrVTAQ0c6ogBYc5t2eHV3TGwO3N1KARtTWPNYKDrzy4NgnLMgT1w7-PeN9GotXzmPUmeEg","auth":"3lOBVsbNSrOT_bI2qsCEUw"}}

  push.sendNotification(sub, 'Teste notificação')