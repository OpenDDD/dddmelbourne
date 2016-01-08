using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevDevDev.Models
{
    public class VotingSessionsViewModel
    {
        public List<VotingSubmissionViewModel> SessionsToVoteFor { get; set; }

        public int TotalVotes { get; private set; }

        public VotingSessionsViewModel()
        {
            SessionsToVoteFor=new List<VotingSubmissionViewModel>();
            TotalVotes = EventConfig.TotalVotes;
        }
    }
}