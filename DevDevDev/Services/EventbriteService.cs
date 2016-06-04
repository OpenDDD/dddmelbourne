﻿using System;
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
                    var order = JsonConvert.DeserializeObject<EventbriteOrder>(orderInfo);
                    // we only care about a very specific event for this purpose.
                    return order.Event_id.ToLowerInvariant().Equals(_eventId.ToLowerInvariant()) ? order : null;
                }
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}