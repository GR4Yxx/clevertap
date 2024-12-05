importScripts(
  "https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js"
);

self.addEventListener("install", function (event) {
  console.log("Service Worker installing.");
});

self.addEventListener("activate", function (event) {
  console.log("Service Worker activating.");
});

self.addEventListener("push", function (event) {
  console.log("Push event received:", event);
});

self.addEventListener("notificationclick", function (event) {
  console.log("Notification click received:", event);
});
