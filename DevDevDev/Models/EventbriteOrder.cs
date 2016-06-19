using System.Collections.Generic;

namespace DevDevDev.Models
{
    public class EventbriteOrder
    {
        public string Id { get; set; }
        public string Event_id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public IEnumerable<EventbriteOrderAttendee> Attendees { get; set; }
    }
}