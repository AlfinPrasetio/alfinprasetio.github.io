// const webPush = require('web-push');

// const vapidKeys = {
//     publicKey: '<YOUR_PUBLIC_VAPID_KEY>',
//     privateKey: '<YOUR_PRIVATE_VAPID_KEY>'
// };

// webPush.setVapidDetails('mailto:your-email@example.com', vapidKeys.publicKey, vapidKeys.privateKey);

// const pushSubscription = {
//     endpoint: '<USER_SUBSCRIPTION_ENDPOINT>',
//     keys: {
//         auth: '<USER_AUTH_KEY>',
//         p256dh: '<USER_P256DH_KEY>'
//     }
// };

// webPush.sendNotification(pushSubscription, 'Your push notification message')
//     .then(response => console.log('Push sent successfully:', response))
//     .catch(error => console.error('Error')