var push = require('web-push')

let vapidKeys = {
    publicKey: 'BOWQ7tSJgScHu-3gj4YT0mhVi9wFIfERi_xcGHlgHqvoeWVOvLENC_eRwyU9nXldAHoo-YyMCRVCW_EgFyOIH1E',
    privateKey: 'tsMw4VZ1hJoGR5KiHwhXpzqoYjFnYEBfOh2ZgmE95nY'
  }

  push.setVapidDetails('mailto:test@code.com.br', vapidKeys.publicKey, vapidKeys.privateKey)

  //let sub = {"endpoint":"https://wns2-bl2p.notify.windows.com/w/?token=BQYAAACL9EcS1KpDl%2f1bfkVNZjOI5kKVFRaKuuZ1nEBL3V82iUpRBm6tONczqbLCeLKooTAmxzx9Q2kmLSbAuw%2b6AgRnWTjZsF%2bQNxvmvBV%2bGa4X9V5P%2bGNbdURPqPC62D6JganYXlhisgyWczViy9bApOuLnMQlHGRjHR2THiIGrkj7TOzRvLl%2bu4RC649ZuFx2WTX9%2b83BcXj7D0dYjtBO4VQV8ZwTFgh2RB6N2ZoEpYn5f0pSikLM9tzj9xL78VjLbo0Hqi2avSdcYkChMHOz%2fK%2f6vMLGu9rMepNuHlUqsld5kjyElELBTW3fgGS4NrlCc5kQSHBBBF9QWzDQ3uTXdKXX","expirationTime":null,"keys":{"p256dh":"BITB5Gc2xopB2Gis2GKndBLdo-MWqhSGHVeYccaXEmBHbsoZHrKcCewQNHDMK9ByJjwKCNOkvtpFbSoLo_-IbXA","auth":"abSgwsgUnan9-bw2l1F5OA"}}

  //let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fBDTTsMBBD0:APA91bFlbVRFROGDfC-qmdkcz-tmubiHCK6EXW76xueVifSVhJqBAl7-CHTdjax13SauQb6Q44PIzE1K0XTQ2IOW3n1xvfG0mrdfxEtOm31qHAHU9XeJ3hkM5B7qYD3-4XremOJZEikp","expirationTime":null,"keys":{"p256dh":"BMTZE9ij83R4j_S8VRnIn0FnQ5kxSMWjRMJ0oNxFL_TD_wucph-SMob5MogtDQNsgrYxtZ2RkGImOTTJZJJ_Hy0","auth":"VF5-EPXZtFL1V3dMrwdoWA"}}

  //let sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABjY…y4ul9WdDXNd0h-nIP9bTWWNmZefv5IHXHSqRWOmg2PSeZjojZ_YVd3ODshhY","expirationTime":null,"keys":{"auth":"51km-MtO9sECvsBQGTy9TQ","p256dh":"BK81IgSVbOHHFjauSc0XGLVbaPPncr4qpdCxmMB2SkNo83Lu0ING7dLHbsUx35htSjGqpIV-cuxya2WakzzV2io"}}

  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dmzfT-2xYbM:APA91bHJJhUiXisRITXh1A6hmDFiRx3muegjyrvIFUHgflProx4oKqItBj46zf0h9SQ_6jPDDvNbq_sDDJJDSWsyTFYc4Hgf5fwa37AmGzzy3WF84jjpbaBQrCwxppQAoX5EN3Ino950","expirationTime":null,"keys":{"p256dh":"BEM8X0r61S6-kK4-D_XfeBYyRjEVkeyUnvXEhjpyZMVH-UklEtUbzQPzHmKg1h8F1nnjOTCrP0hoJK_duE20EAw","auth":"QXGU2Y_Ed06yHLxqI23cBQ"}}
  push.sendNotification(sub, 'Teste notificação')