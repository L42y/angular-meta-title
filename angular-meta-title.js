angular.module('l42y.meta.title', [
]).provider('Title', function () {
  var api = {
    name: 'title'
  };
  var defaults;
  var service = {
    options: {},
    config: function (options) {
      defaults = angular.copy(options);
      service.options = options;
      return service.options;
    },
    $get: function (
      $window,
      $rootScope
    ) {
      function setTitleContent (options) {
        var op = service.options;
        op = options ? angular.extend(op, options) : defaults;
        api.content = $window.sprintf(op.format, op);

        return api.content;
      }

      api.set = setTitleContent;

      return api;
    }
  };

  return service;
}).run(function (
  $rootScope,
  Title
) {
  $rootScope.$on('$routeChangeSuccess', function ($event, current) {
    Title.set(current.title);
  });

  $rootScope.$on('$stateChangeSuccess', function ($event, toState) {
    Title.set(toState.title);
  });
});
