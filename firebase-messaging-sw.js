// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js');

// Initialize Firebase in the service worker
const firebaseConfig = {
    apiKey: "AIzaSyAvAKdVh5Rr8zGd-AfbG_ZB-6lA-3ayPZw",
    authDomain: "alfian-pwa-f7e13.firebaseapp.com",
    projectId: "alfian-pwa-f7e13",
    storageBucket: "alfian-pwa-f7e13.appspot.com",
    messagingSenderId: "522876970976",
    appId: "1:522876970976:web:32943613854fd33f986d85"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background message
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
