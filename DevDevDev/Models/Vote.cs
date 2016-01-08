using System;
using Microsoft.WindowsAzure.Storage.Table.DataServices;

namespace DevDevDev.Models
{
    public class Vote : Microsoft.WindowsAzure.Storage.Table.TableEntity
    {

        public DateTime SubmittedDateUTC { get; set; }
        public string SessionId { get; set; }
        public string IpAddress { get; set; }

        public Vote()
        {
            
        }

        public Vote(string sessionId, string ipAddress)
        {
            PartitionKey = "Vote";
            RowKey = Guid.NewGuid().ToString();
            SubmittedDateUTC = DateTime.UtcNow;
            SessionId = sessionId;
            IpAddress = ipAddress;
        }
    
       

    }
}