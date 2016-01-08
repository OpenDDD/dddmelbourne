using System.Collections.Generic;
using DevDevDev.Models;
using Microsoft.WindowsAzure.Storage.Table;

namespace DevDevDev.Services
{
    public class VoteService : TableStorageServiceBase
    {
        private const string _votesTableName = "Votes";
      
        public VoteService()
            : base(_votesTableName)
        {
        }

        public void AddVotes(IEnumerable<Vote> votes)
        {
            CreateTableStorageIfDoesntExist();

            var tableClient = GetTableClient();
            var table = tableClient.GetTableReference(_tableName);

            var batch = new TableBatchOperation();
            foreach (var vote in votes)
            {
                batch.Add(TableOperation.InsertOrReplace(vote));
            }

            table.ExecuteBatch(batch);
        }
    }
}