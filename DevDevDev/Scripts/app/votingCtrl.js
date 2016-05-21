
var myAppModule = angular.module('ddd', []);

angular.module('ddd');

function votingCtrl($scope, $http) {

    $scope.getSessionsUrl = $("#config").data("sessions-url");
    $scope.submitUrl = $("#config").data("submit-votes-url");
    $scope.voteSuccessUrl = $("#config").data("voted-successfully-url");
    $scope.voteFailUrl = $("#config").data("voted-failure-url");
    $scope.validateWithEventbrite = $("#config").data("validate-with-eventbrite");
    $scope.areWeSubmittingVotes = false;
    $scope.sessionsLoaded = false;
    $scope.showFull = false;
    
    $http({ method: 'POST', url: $scope.getSessionsUrl }).
      success(function (data, status) {
          $scope.viewModel = data;
          $scope.viewModel.MaxNumberOfVotes = data.TotalVotes;

          $scope.sessionsLoaded = true;
      }).
      error(function (data, status) {
          window.location = $scope.voteFailUrl;
      });
    
  
    $scope.vote = function (session) {

        if ($scope.viewModel.TotalVotes != 0) {
            $scope.viewModel.TotalVotes--;
            session.VotedFor = true;
        }
           
    };
    
    $scope.unvote = function (session) {
        
        if ($scope.viewModel.TotalVotes != $scope.viewModel.MaxNumberOfVotes) {
            $scope.viewModel.TotalVotes++;
            session.VotedFor = false;
        }
         
    };

    $scope.submit = function(sessionsToVoteFor) {

      

        if ($scope.viewModel.TotalVotes !== 0) {
            alert('You still have ' + $scope.viewModel.TotalVotes + ' votes left!');
            return;
        }

        var votes = [];

        sessionsToVoteFor.forEach(function (session) {
           
            if (session.VotedFor)
                votes.push(session.SessionId);
        });


        $scope.areWeSubmittingVotes = true;

        $http({ method: 'POST', url: $scope.submitUrl, data: votes }).

         success(function (data, status) {
             window.location = $scope.voteSuccessUrl;
            
         }).
         error(function (data, status) {
             $scope.areWeSubmittingVotes = false;
             window.location = $scope.voteFailUrl;
         });
        
    };
}