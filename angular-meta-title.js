angular.module('l42y.meta.title', [
]).run(function (
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
