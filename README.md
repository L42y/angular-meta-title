# [angular](http://angularjs.org)-[meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)-[title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)

## Installation

1. `bower install --save angular-meta-title`
2. including script file provided by bower component `sprintf` into your application
3. including `angular-meta-title.js` script file provided by this component into your application
4. adding `l42y.meta.title` as a module dependency to your application

## Usage

### Configuration

```js
angular.module('App', [
    'l42y.meta.title'
]).config(function (
    TitleProvider
) {
    TitleProvider.config({
        name: 'Site name',
        slogan: 'Site slogan',
        format: '%(name)s · %(slogan)s'
    });
}).config(function (
    $routeProvider
) {
    $routeProvider.when('/about', {
        title: {
            page: 'About',
            format: '%(page)s · %(name)s'
        },
        controller: 'AboutCtrl',
        templateUrl: 'views/pages/about.html'
    });
}).controller('GlobalCtrl', function (
    Title
) {
    this.title = Title;
}).controller('AboutCtrl', function (
    Title
) {
    Title.set({
        page: '关于'
        format: '%(page)s'
    });
});
```

### Binding

```html
<html ng-app="App" ng-controller="GlobalCtrl as g">
    <head>
        <title ng-bind="g.title.content">Site name</title>
    </head>
</html>
```

## License

[WTFPL](http://wtfpl.org)
