sap.ui.version = "1.120.0";
sap.ui.define(["sap/ui/core/UIComponent", "@ui5/webcomponents-base/dist/config/Fonts"], function(UIComponent, Fonts) {
	"use strict";
	return UIComponent.extend("sap.ui.demo.todo.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},
		init: function() {
			// Supress font loading as this is done by the core library
			Fonts.setDefaultFontLoading(false);
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});