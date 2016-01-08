using System.Configuration;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

namespace DevDevDev.Services
{
    public abstract class TableStorageServiceBase
    {

        protected readonly string tableStorageConnStr = ConfigurationManager.AppSettings.Get("AzureTableStorageConnectionString");
        protected string localConnStr = "UseDevelopmentStorage=true";
        protected readonly string _tableName;

        public TableStorageServiceBase(string tableName)
        {
            _tableName = tableName;
        }

        protected CloudTableClient GetTableClient()
        {
            var storageAccount = CloudStorageAccount.Parse(tableStorageConnStr);

            return storageAccount.CreateCloudTableClient();
        }

        protected void CreateTableStorageIfDoesntExist()
        {
            var tableClient = GetTableClient();
            var table = tableClient.GetTableReference(_tableName);
            table.CreateIfNotExists();
        }
        

    }
}