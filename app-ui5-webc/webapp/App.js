//create AppComponent
sap.ui.require([
	"sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
	new ComponentContainer({
		id: "compCont",
		name: "sap.ui.demo.todo",
		manifest: true
	}).placeAt("content");
}, function(oError) {console.log(oError);});