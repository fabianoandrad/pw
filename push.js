var push = require('web-push')

let vapidKeys = {
    publicKey: 'BOWQ7tSJgScHu-3gj4YT0mhVi9wFIfERi_xcGHlgHqvoeWVOvLENC_eRwyU9nXldAHoo-YyMCRVCW_EgFyOIH1E',
    privateKey: 'tsMw4VZ1hJoGR5KiHwhXpzqoYjFnYEBfOh2ZgmE95nY'
  }

  push.setVapidDetails('mailto:test@code.com.br', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d1CRjudWRjA:APA91bEVNQb7ILMzdpkfKwPFKNj9lz4qCFpJS1TvUcvP0CdbhzGZgn_qk22xjp-zcxA4SlJefjNdeZ5ynU7pBNI_I44IGbvwD3VLqisugwoSJhVe69uPKDeQU4HHu3tyw2Ifgt7FcTu7",
  "expirationTime":null,
  "keys":{"p256dh":"BC6YWoBtw9F2g4cDhr78Lrp3_C7jFBScTXz61MQd4mvBvQcIATHU6MZ1Q3ccNVq2EjLpj3aSuBM2_wl1vg6K5ew",
  "auth":"TMpce1VrSXzs3AbdjdQABQ"}};
  
  push.sendNotification(sub, 'Teste notificação')