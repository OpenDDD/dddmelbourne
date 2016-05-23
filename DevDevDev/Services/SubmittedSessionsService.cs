using System;
using System.Linq;
using System.Text.RegularExpressions;
using DevDevDev.Infrastructure;
using DevDevDev.Models;
using Microsoft.WindowsAzure.Storage.Table;

namespace DevDevDev.Services
{
    public class SubmittedSessionsService : TableStorageServiceBase
    {
        private const string _sessionsTableName = "Sessions";
        private static readonly Regex FirstInitial = new Regex(@"(\b[a-zA-Z])[a-zA-Z]* ");

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
                var session = new VotingSubmissionViewModel
                {
                    SessionId = sessionSubmission.RowKey,
                    SessionTitle = sessionSubmission.SessionTitle,
                    SessionAbstract = sessionSubmission.SessionAbstract.FormatForHtml(),
                    PresenterName = AbbreviatePresenterName(sessionSubmission.PresenterName),
                    PresenterTwitterAlias = sessionSubmission.PresenterTwitterAlias,
                    PresenterWebsite = sessionSubmission.PresenterWebsite,
                    PresenterBio = sessionSubmission.PresenterBio,
                    RecommendedAudience = sessionSubmission.RecommendedAudience
                };

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
                    PresenterName = AbbreviatePresenterName(sessionSubmission.PresenterName),
                    PresenterTwitterAlias = sessionSubmission.PresenterTwitterAlias,
                    PresenterWebsite = sessionSubmission.PresenterWebsite,
                    PresenterBio = sessionSubmission.PresenterBio,
                    RecommendedAudience = sessionSubmission.RecommendedAudience
                };

                viewModel.Sessions.Add(session);

            }
            return viewModel;
        }

        private static string AbbreviatePresenterName(string presenterName)
        {
            if (string.IsNullOrEmpty(presenterName))
            {
                return string.Empty;
            }

            var presenterNames = presenterName.Replace(", ", ",")
                .Split(',').Select(presenter => FirstInitial.Replace(presenter, "$1. ")).ToList();

            return string.Join(", ", presenterNames);
        }
    }
}