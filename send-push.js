const webpush = require('web-push');

const options = {
  vapidDetails: {
    subject: 'http://127.0.0.1:8080',
    publicKey: 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE',
    privateKey: 'tBoppvhj9A9NO0ZrFsPiH_CoAZ84TagjxiKyGjR4V8w'
  },
  TTL: 5000
}

// NgPushRegistration-Object from the browser
const pushSubscription =  { "endpoint": "https://fcm.googleapis.com/fcm/send/ei-lH_fYWCY:APA91bFcigPWqLCZJZN65x2GN_pUQtj0lBl-Ov6509H01nMf6Cq28O5dfqdn9CsGVG3xhLHJ-pGwaxj1IfXvrijQzwarJj0LNmk2Izr7uIKAUNJVlLSMU74jztJXXaoQNXG_HIKyU-Rf", "keys": { "p256dh": "BBSFMZTpu2hYOTDIepsBHrpQrE8F4OToejvL86JQHKxhyi3KAw9kbD56MbHi8cvrtqpI9Lj_o9quBWU6xF2Um3k=", "auth": "MapKlNX8IEg3i4Gash8sgw==" } }

const payload = JSON.stringify({
  notification: {
    title: 'Your Gate Changed',
    body: 'Your Gate is now G62',
    icon: './assets/angular.png',
    data: 'additional data'
  }
});

webpush.sendNotification(
  pushSubscription,
  payload,
  options
);
