/**
 * Created by cathal on 8/20/15.
 */
app.controller('HomeController', ['$scope', 'emails', function($scope, emails) {
  emails.success(function(data) {
      $scope.emails = data;
  })
}]);