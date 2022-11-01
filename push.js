var push = require('web-push')

let vapidKeys = {
    publicKey: 'BOWQ7tSJgScHu-3gj4YT0mhVi9wFIfERi_xcGHlgHqvoeWVOvLENC_eRwyU9nXldAHoo-YyMCRVCW_EgFyOIH1E',
    privateKey: 'tsMw4VZ1hJoGR5KiHwhXpzqoYjFnYEBfOh2ZgmE95nY'
  }

  push.setVapidDetails('mailto:test@code.com.br', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {"endpoint":"https://wns2-bl2p.notify.windows.com/w/?token=BQYAAACL9EcS1KpDl%2f1bfkVNZjOI5kKVFRaKuuZ1nEBL3V82iUpRBm6tONczqbLCeLKooTAmxzx9Q2kmLSbAuw%2b6AgRnWTjZsF%2bQNxvmvBV%2bGa4X9V5P%2bGNbdURPqPC62D6JganYXlhisgyWczViy9bApOuLnMQlHGRjHR2THiIGrkj7TOzRvLl%2bu4RC649ZuFx2WTX9%2b83BcXj7D0dYjtBO4VQV8ZwTFgh2RB6N2ZoEpYn5f0pSikLM9tzj9xL78VjLbo0Hqi2avSdcYkChMHOz%2fK%2f6vMLGu9rMepNuHlUqsld5kjyElELBTW3fgGS4NrlCc5kQSHBBBF9QWzDQ3uTXdKXX","expirationTime":null,"keys":{"p256dh":"BITB5Gc2xopB2Gis2GKndBLdo-MWqhSGHVeYccaXEmBHbsoZHrKcCewQNHDMK9ByJjwKCNOkvtpFbSoLo_-IbXA","auth":"abSgwsgUnan9-bw2l1F5OA"}}

  push.sendNotification(sub, 'Teste notificação')