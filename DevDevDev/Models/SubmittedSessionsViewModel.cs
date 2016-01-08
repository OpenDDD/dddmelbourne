using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevDevDev.Models
{
    public class SubmittedSessionsViewModel
    {
        public List<SessionSubmissionViewModel> Sessions { get; set; }

        public SubmittedSessionsViewModel()
        {
            Sessions = new List<SessionSubmissionViewModel>();
        }
    }
}