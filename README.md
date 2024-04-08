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

## Events

* initialized

## Methods

* create({clientToken:"", environment: "", trackingConsent: TRACKING CONSTANT})
* enableLogging({name:"", sampleRate: 100})
* log("string", LEVEL CONSTANT)
* enableNetworkEvents()
* enableRumLogging({appId: "", longTasks: 4000})

## Properties

* verbosity(int) - set only

## Constants

Verbosity:
* Datadog.VERBOSITY_INFO
* Datadog.VERBOSITY_DEBUG
* Datadog.VERBOSITY_VERBOSE

Log level:
* Datadog.LEVEL_DEBUG
* Datadog.LEVEL_INFO
* Datadog.LEVEL_WARNING
* Datadog.LEVEL_ERROR
* Datadog.LEVEL_WTF

Tracking:
* Datadog.TRACKING_PENDING
* Datadog.TRACKING_GRANTED
* Datadog.TRACKING_NOT_GRANTED
