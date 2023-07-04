# README

> **Note**: The boostrapping mechanism showcased in this repository is still considered experimental!

This repository includes two sub-projects. Both projects implement a todo application, similar to [openui5-sample-app](https://github.com/SAP/openui5-sample-app), but each with a different set of UI controls:

* `/app-ui5`
  * uses regular `sap.m` UI5 controls
* `/app-ui5-webc`
  * uses wrapped UI5 Web Components

## Basic Setup

To build and run the above apps, you also need to checkout [OpenUI5](https://github.com/SAP/openui5).

The `ui5-workspace.yaml` files in the respective app folders define relative paths to your local OpenUI5 folder. Please make sure these paths are correct.
The predefined paths expect the folder `openui5` to reside next to this repository folder.

## Build and Run the Apps

Please see the respective `README.MD` files in the app folders:

* [app-ui5](./app-ui5/README.MD)
* [app-ui5-webc](./app-ui5-webc/README.MD)

## Modular Core Bootstrap

The new bootstrapping mechanism can be activated by using `sap-ui-boot.js` instead of `sap-ui-core.js`.

In the snippet below, we will outline some important differences when using the new `sap-ui-boot.js`.

```html
<script
    id="sap-ui-bootstrap"
    src="resources/sap-ui-boot.js"
    data-sap-ui-modules="[sap/ui/demo/todo/Component-bundle-0], [sap/ui/demo/todo/Component-bundle-1]"
    data-sap-ui-onInit="sap/ui/demo/todo/App@./">
</script>
```

### sapUiModules

The `sapUiModules` config option accepts a comma separated list of modules which should be loaded during bootstrapping; for example the Component preload bundles for your app as specified in the `ui5.yaml`.

> **Note**: Modules that might fail to load can be marked as *optional* by enclosing the module name in brackets.
> This is commonly the case during development when your bootstrap already contains the productive bundles, but you have not yet built the app.

### sapUiOnInit

The `sapUiOnInit` config option accepts a string value pointing to a UI5 module which will be loaded at the end of the bootstrap.

> **Important**: In order to provide a resource path mapping, you must append the local path after the `@` symbol. In the above sample, the `sap/ui/demo/todo` path is thus mapped to the local path `./`.
