angular.module('l42y.meta.title').directive('title', function (
  Title
) {
  return {
    restrict: 'E',
    link: function ($scope, $element, $attrs) {
      $scope.$watch(function () {
        return Title.content;
      }, function (content) {
        $element.text(content);
      });
    }
  };
});
