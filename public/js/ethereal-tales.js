/**
 * Created by Holy on 21-Jul-17.
 */

var app = angular.module("etherealtales", []).constant('API_URL', 'http://localhost/etherealtales/public/api/v1/');

var refresh = function() {
    $http.get('api/v1/etherealtales')
        .then(function (response) {
            $scope.etherealtales = response.data.records;
        });
}

app.controller('etherealTalesController', function($scope, $http) {

    $scope.newEtherealTale = function () {
        $http.post('api/v1/etherealtales',
            {
                author: $scope.etherealTale.author,
                subject: $scope.etherealTale.subject,
                tale: $scope.etherealTale.tale

            })
            .success(function (response) {
                $scope.etherealTale = response;
                refresh();
            })
            .error(function (response) {
                console.log(response);
                refresh();
            });
    };
});
    // //show modal form
    // $scope.toggle = function(modalstate, id) {
    //     $scope.modalstate = modalstate;
    //
    //     switch (modalstate) {
    //         case 'add':
    //             $scope.form_title = "Add New Ethereal Tale";
    //             break;
    //         case 'edit':
    //             $scope.form_title = "Ethereal Tale Detail";
    //             $scope.id = id;
    //             $http.get(API_URL + 'etherealtales/' + id)
    //                 .success(function(response) {
    //                     console.log(response);
    //                     $scope.etherealtales = response;
    //                 });
    //             break;
    //         default:
    //             break;
    //     }
    //     console.log(id);
    //     $('#myModal').modal('show');
    // }
    //

// app.controller('etherealTalesController', function($scope, $http, API_URL) {
//     //save new record / update existing record
//     $scope.save = function (id) {
//         var url = API_URL + "employees";
//
//         $http({
//             method: 'POST',
//             url: url,
//             data: $.param($scope.etherealTale),
//             headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//         }).success(function (response) {
//             console.log(response);
//             location.reload();
//         }).error(function (response) {
//             console.log(response);
//             alert('This is embarassing. An error has occured. Please check the log for details');
//         });
//     }
// });
    //
    // //delete record
    // $scope.confirmDelete = function(id) {
    //     var isConfirmDelete = confirm('Are you sure you want this record?');
    //     if (isConfirmDelete) {
    //         $http({
    //             method: 'DELETE',
    //             url: API_URL + 'etherealtales/' + id
    //         }).
    //         success(function(data) {
    //             console.log(data);
    //             location.reload();
    //         }).
    //         error(function(data) {
    //             console.log(data);
    //             alert('Unable to delete');
    //         });
    //     } else {
    //         return false;
    //     }
    // }
// });