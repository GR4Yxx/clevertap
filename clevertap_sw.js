self.addEventListener("push", function (event) {
  console.log("Push received:", event);
});

importScripts("https://d2r1yp2w7bby2u.cloudfront.net/js/clevertap_sw.js");
