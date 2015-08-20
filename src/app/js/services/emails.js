/**
 * Created by cathal on 8/20/15.
 */
app.factory('emails', ['$http', function($http){
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/emails-api/emails.json')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return err;
        });
}]);