(function() {
    var app = angular.module('mentorss', []);

    app.controller('MentorsListController', ['$http',
        function($http) {
            var mentor = this;
            mentor.mentorInfo = [];
            $http.get('/json/mentors.json').success(function(data) {

                mentor.mentorInfo = data;
            });

        }
    ]);

})();