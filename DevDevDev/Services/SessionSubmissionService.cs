using System;
using System.Web;
using DevDevDev.Models;
using Microsoft.WindowsAzure.Storage.Table;

namespace DevDevDev.Services
{
    public class SessionSubmissionService : TableStorageServiceBase
    {

        private const string _sessionsTableName = "Sessions";

        public SessionSubmissionService()
            : base(_sessionsTableName)
        {

        }

        public bool AddSession(SessionSubmissionViewModel viewModel)
        {
            try
            {
                CreateTableStorageIfDoesntExist();

                var session = new SessionSubmission();

                var tableClient = GetTableClient();

                session.Status = 0;
                session.SubmitterIp = HttpContext.Current.Request.UserHostAddress;
                session.SessionTitle = viewModel.SessionTitle.Trim();
                session.SessionAbstract = viewModel.SessionAbstract.Trim();
                session.RecommendedAudience = viewModel.RecommendedAudience.Trim();
                session.PresenterName = viewModel.PresenterName.Trim();
                session.PresenterBio = viewModel.PresenterBio.Trim();
                session.PresenterMobileNumber = viewModel.PresenterMobileNumber.Trim();
                session.PresenterEmail = viewModel.PresenterEmail.Trim();

                if (!String.IsNullOrWhiteSpace(viewModel.PresenterTwitterAlias))
                {
                    session.PresenterTwitterAlias = viewModel.PresenterTwitterAlias
                        .Trim()
                        .ToLower()
                        .TrimStart('@');
                }

                if (!String.IsNullOrWhiteSpace(viewModel.PresenterWebsite))
                {
                    session.PresenterWebsite = viewModel.PresenterWebsite
                        .Trim()
                        .ToLower()
                        .Replace("http://", "")
                        .Replace("https://", "");
                }

                CloudTable table = tableClient.GetTableReference(_tableName);
                TableOperation insertOrReplaceOperation = TableOperation.InsertOrReplace(session);
                table.Execute(insertOrReplaceOperation);

                return true;
            }
            catch 
            {
                return false;
            }

        }
    }
}