using System.Configuration;

namespace DevDevDev.Infrastructure
{
    public static class FeatureFlags
    {
        private static bool? _validateEventbriteVotes;

        public static bool ValiateEventbriteVotes
        {
            get
            {
                if(!_validateEventbriteVotes.HasValue )
                    _validateEventbriteVotes = bool.Parse(ConfigurationManager.AppSettings.Get("ValidateWithEventbrite"));

                return _validateEventbriteVotes.Value;
            } 
        }
    }
}