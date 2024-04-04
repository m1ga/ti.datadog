# Datadog module for Titanium

```js
Datadog = require("ti.datadog");
Datadog.create({
  clientToken: "token",
  environment: "env",
  trackingConsent: 0 // 0 = Pending, 1 = Granted, 2 = Not granted
});

Datadog.addEventListener("inizialized", function(){
  Datadog.enableLogging();
  Datadog.log("done", "i");
})
```
