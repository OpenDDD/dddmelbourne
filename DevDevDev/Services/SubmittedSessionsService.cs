using System.Linq;
using DevDevDev.Infrastructure;
using DevDevDev.Models;
using Microsoft.WindowsAzure.Storage.Table;

namespace DevDevDev.Services
{
    public class SubmittedSessionsService : TableStorageServiceBase
    {

        private const string _sessionsTableName = "Sessions";

        public SubmittedSessionsService()
            : base(_sessionsTableName)
        {
        }


        public VotingSessionsViewModel GetSessionsForVoting()
        {
            var viewModel = new VotingSessionsViewModel();
            var tableClient = GetTableClient();
            var sessionTable = tableClient.GetTableReference(_sessionsTableName);

            var sessionQuery =
                 (new TableQuery<SessionSubmission>()).Where(
                 TableQuery.GenerateFilterConditionForInt("Status", QueryComparisons.Equal, 1));

            var sessions = sessionTable.ExecuteQuery(sessionQuery).ToList();

            foreach (var sessionSubmission in sessions)
            {
                var session = new VotingSubmissionViewModel();

                session.SessionId = sessionSubmission.RowKey;
                session.SessionTitle = sessionSubmission.SessionTitle;
                session.SessionAbstract = sessionSubmission.SessionAbstract.FormatForHtml();
                session.PresenterName = sessionSubmission.PresenterName;
                session.PresenterTwitterAlias = sessionSubmission.PresenterTwitterAlias;
                session.PresenterWebsite = sessionSubmission.PresenterWebsite;
                session.PresenterBio = sessionSubmission.PresenterBio;
                session.RecommendedAudience = sessionSubmission.RecommendedAudience;

                viewModel.SessionsToVoteFor.Add(session);

            }
            return viewModel;
        }

        public SubmittedSessionsViewModel GetSubmittedSessions()
        {
            var tableClient = GetTableClient();
            var sessionTable = tableClient.GetTableReference(_sessionsTableName);
            var sessionQuery = (new TableQuery<SessionSubmission>()).Where(TableQuery.GenerateFilterConditionForInt("Status", QueryComparisons.Equal, 1));
         
            var sessions = sessionTable.ExecuteQuery(sessionQuery).ToList();
            
            var viewModel = new SubmittedSessionsViewModel();

            foreach (var sessionSubmission in sessions)
            {
                var session = new SessionSubmissionViewModel
                {
                    SessionTitle = sessionSubmission.SessionTitle,
                    SessionAbstract = sessionSubmission.SessionAbstract.FormatForHtml(),
                    PresenterName = sessionSubmission.PresenterName,
                    PresenterTwitterAlias = sessionSubmission.PresenterTwitterAlias,
                    PresenterWebsite = sessionSubmission.PresenterWebsite,
                    PresenterBio = sessionSubmission.PresenterBio,
                    RecommendedAudience = sessionSubmission.RecommendedAudience
                };

                viewModel.Sessions.Add(session);

            }
            return viewModel;
        }
    }
}