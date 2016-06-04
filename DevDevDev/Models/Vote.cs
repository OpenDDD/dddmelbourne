using System;
using Microsoft.WindowsAzure.Storage.Table.DataServices;

namespace DevDevDev.Models
{
    public class Vote : Microsoft.WindowsAzure.Storage.Table.TableEntity
    {

        public DateTime SubmittedDateUTC { get; set; }
        public string SessionId { get; set; }
        public string IpAddress { get; set; }
        public string OrderNumber { get; set; }
        public string OrderEmail { get; set; }
        public bool ValidOrder { get; set; }
        public bool CorrectEmail { get; set; }

        public Vote()
        {
            
        }

        public Vote(string sessionId, string ipAddress, string orderNumber, string orderEmail, bool validOrder, bool correctEmail)
        {
            PartitionKey = "Vote";
            RowKey = Guid.NewGuid().ToString();
            SubmittedDateUTC = DateTime.UtcNow;
            SessionId = sessionId;
            IpAddress = ipAddress;
            OrderNumber = orderNumber;
            OrderEmail = orderEmail;
            ValidOrder = validOrder;
            CorrectEmail = correctEmail;
        }
    
       

    }
}