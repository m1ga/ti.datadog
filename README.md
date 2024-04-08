# Datadog module for Titanium

Link to Android SDK: https://docs.datadoghq.com/logs/log_collection/android/


```js
Datadog = require("ti.datadog");
Datadog.create({
  clientToken: "token",
  environment: "env",
  trackingConsent: 0 // 0 = Pending, 1 = Granted, 2 = Not granted
});

Datadog.addEventListener("initialized", function(){
  Datadog.enableLogging();
  Datadog.log("done", "i");
})
```
