(function() {
    var app = angular.module('mentorss', []);

    app.controller('MentorsListController', ['$http',
        function($http) {

            var vm = this;
            vm.mentors = [];
            $http.get('/json/mentors.json').success(function(data) {

                vm.mentors = data;
            });

        }
    ]);



    app.controller('MenteesListController', ['$http',
        function($http) {

            var vm = this;
            vm.mentees = [];
            $http.get('/json/mentees.json').success(function(data) {

                vm.mentees = data;
            });

        }
    ]);

})();