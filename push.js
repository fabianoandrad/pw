var push = require('web-push')

let vapidKeys = {
    publicKey: 'BOWQ7tSJgScHu-3gj4YT0mhVi9wFIfERi_xcGHlgHqvoeWVOvLENC_eRwyU9nXldAHoo-YyMCRVCW_EgFyOIH1E',
    privateKey: 'tsMw4VZ1hJoGR5KiHwhXpzqoYjFnYEBfOh2ZgmE95nY'
  }

  push.setVapidDetails('mailto:test@code.com.br', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {}
  push.sendNotification(sub, 'Teste notificação')