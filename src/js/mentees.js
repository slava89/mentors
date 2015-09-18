/*(function() {
    angular.module('mentorss', [])

    .controller('MenteesListController', ['$http',
        function($http) {

            var vm = this;
            vm.mentees = [];
            $http.get('/json/mentees.json').success(function(data) {

                vm.mentees = data;
            });

        }
    ]);

})();*/