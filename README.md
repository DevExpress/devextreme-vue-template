# devextreme-vue-template

The DevExtreme Vue Template allows you to create an application with several views and a hierarchical menu (see the [live preview](https://devexpress.github.io/devextreme-vue-template)).

![DevExtreme-Vue-Template](TODO)

You can use [DevExtreme CLI](https://github.com/DevExpress/devextreme-cli) commands to modify, add, and delete views, configure the menu, and change themes.

The DevExtreme Vue Template is based on [DevExtreme Vue components](https://github.com/devexpress/devextreme-vue) and generated with [Vue CLI](https://cli.vuejs.org/).

* [Getting started](#getting-started)
* [Switch the Layout](#switch-layout)
* [Add a View](#add-view)
* [Configure Navigation Items](#configure-nav-items)
* [Customize Application Appearance](#customize-application-appearance)
  * [Change Theme](#change-theme)
  * [Create a Custom Theme](#create-custom-theme)
  * [Apply the Additional Theme to a Custom Element](#apply-additional-theme-to-custom-element)
  * [Apply Theme Variables to Custom Elements](#apply-theme-variables)
* [License](#license)

## <a name="getting-started"></a>Getting Started

Use the DevExtreme CLI's `new vue-app` command to create a DevExtreme Vue application that includes several sample views and a navigation menu:

```bash
npx devextreme-cli new vue-app app-name
cd app-name
npm run serve
```

The application includes a side navigation menu and an outer toolbar.

![Outer Toolbar Layout](TODO)

You can set the `--layout` option to `side-nav-inner-toolbar` to use the layout with an inner toolbar.

```bash
npx devextreme-cli new vue-app app-name --layout=side-nav-inner-toolbar
```

![Inner Toolbar Layout](TODO)

Use the `--empty` flag to generate an application without views and navigation items.

```bash
npx devextreme-cli new vue-app app-name --empty
```

You can also clone the current repository to configure the DevExtreme Vue Template.

```bash
git clone https://github.com/DevExpress/devextreme-vue-template/
cd devextreme-vue-template
npm install
npm run serve
```

## <a name="license"></a>License

Familiarize yourself with the
[DevExtreme License](https://js.devexpress.com/Licensing/).
[Free trial is available!](http://js.devexpress.com/Buy/)

**DevExtreme Vue Template is released as a MIT-licensed (free and open-source) add-on to DevExtreme.**
