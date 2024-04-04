// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.


// open a single window
const win = Ti.UI.createWindow();
const label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
import ti_datadog  from 'ti.datadog';
Ti.API.info("module is => " + ti_datadog);

label.text = ti_datadog.example();

Ti.API.info("module exampleProp is => " + ti_datadog.exampleProp);
ti_datadog.exampleProp = "This is a test value";

if (Ti.Platform.name == "android") {
	const proxy = ti_datadog.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}
