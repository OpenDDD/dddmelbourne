using System;
using System.Configuration;
using System.Net;
using DevDevDev.Models;
using Newtonsoft.Json;

namespace DevDevDev.Services
{
    public class EventbriteService
    {
        private const string EventbriteBaseUri = "https://www.eventbriteapi.com/v3/";
        private readonly string _token;
        private readonly string _eventId;

        public EventbriteService()
        {
            _token = ConfigurationManager.AppSettings.Get("EventbriteApiAuthToken");
            _eventId = ConfigurationManager.AppSettings.Get("EventbriteEventId");
        }

        public EventbriteOrder GetOrder(string orderId)
        {
            try
            {
                using (var client = new WebClient())
                {
                    var orderInfo = client.DownloadString(string.Format("{0}orders/{1}?token={2}", EventbriteBaseUri, orderId, _token));
                    var attendeesInfo = client.DownloadString(string.Format("{0}orders/{1}/attendees?token={2}", EventbriteBaseUri, orderId, _token));

                    var order = JsonConvert.DeserializeObject<EventbriteOrder>(orderInfo);
                    var orderAttendees = JsonConvert.DeserializeObject<EventbriteOrder>(attendeesInfo);
                    order.Attendees = orderAttendees.Attendees;

                    // we only care about a very specific event for this purpose.
                    return order.Event_id.ToUpperInvariant().Equals(_eventId.ToUpperInvariant()) ? order : null;
                }
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}