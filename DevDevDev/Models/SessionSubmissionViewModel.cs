


using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace DevDevDev.Models
{
    public class SessionSubmissionViewModel
    {

        [Required]
        [DisplayName("Session title")]
        public string SessionTitle { get; set; }
 
        [Required]
        [DisplayName("Session abstract")]
        public string SessionAbstract { get; set; }

        [Required]
        [DisplayName("Recommended audience")]
        public string RecommendedAudience { get; set; }

        [Required]
        [DisplayName("Presenter name")]
        public string PresenterName { get; set; }

        [Required]
        [DisplayName("Presenter email")]
        public string PresenterEmail { get; set; }

        [Required]
        [DisplayName("Presenter mobile")]
        public string PresenterMobileNumber { get; set; }

        [DisplayName("Twitter alias")]
        public string PresenterTwitterAlias { get; set; }

        [DisplayName("Website")]
        public string PresenterWebsite { get; set; }

        [Required]
        [DisplayName("Bio")]
        public string PresenterBio { get; set; }

    }
}

     