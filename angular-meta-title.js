angular.module('l42y.meta.title', []).provider('Title', function (
) {
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
      $rootScope.$on('$routeChangeSuccess', function ($event, current) {
        var op = service.options;
        op = current.title ? angular.extend(op, current.title) : defaults;

        api.content = $window.sprintf(op.format, op);
      });

      return api;
    }
  };

  return service;
});
