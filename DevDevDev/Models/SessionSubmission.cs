using System;

namespace DevDevDev.Models
{
    public class SessionSubmission : Microsoft.WindowsAzure.Storage.Table.TableEntity
    {
        public SessionSubmission()
        {
            PartitionKey = "Session";
            RowKey = Guid.NewGuid().ToString();
            SubmittedDateUtc = DateTime.UtcNow;
        }
    
        public string SessionTitle { get; set; }
        public string SessionAbstract { get; set; }
        public string RecommendedAudience { get; set; }
        public string PresenterName { get; set; }
        public string PresenterEmail { get; set; }
        public string PresenterMobileNumber { get; set; }
        public string PresenterTwitterAlias { get; set; }
        public string PresenterWebsite { get; set; }
        public string PresenterBio { get; set; }
        public readonly DateTime SubmittedDateUtc;
        public int Status { get; set; }
        public string SubmitterIp { get; set; }


    }
}