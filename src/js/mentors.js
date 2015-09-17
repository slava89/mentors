(function() {
    var app = angular.module('mentorss', []);

    app.controller('MentorsListController', ['$http',
        function($http) {
            var mentor = this;
            mentor.mentorInfo = [];
            $http.get('../src/json/mentors.json').success(function(data) {

                mentor.mentorInfo = data;
            });

        }
    ]);

})();