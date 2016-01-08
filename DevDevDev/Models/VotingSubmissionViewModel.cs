
namespace DevDevDev.Models
{
    public class VotingSubmissionViewModel
    {
        public string SessionId { get; set; }

        public string SessionTitle { get; set; }
 
        public string SessionAbstract { get; set; }
        
        public string RecommendedAudience { get; set; }

        public string PresenterName { get; set; }
        
        public string PresenterEmail { get; set; }
        
        public string PresenterTwitterAlias { get; set; }

        public string PresenterWebsite { get; set; }

        public string PresenterBio { get; set; }

        public bool VotedFor { get; set; }
        
        public bool ShowDescription { get; set; }

    }
}

     