## Setup
The site runs on Windows Azure Websites and uses Azure table storage to persist talk submissions and votes.  

The following Web.config AppSettings are required to run:  
1.  `AzureTableStorageConnectionString` which is a standard Azure table storage connection string  
2.  `CaptchaPass` used by the Captcha system for talk submissions  
3.  `CaptchaSalt` used by the Captcha system for talk submissions  
4.  `CaptchaChars` used by the Captcha system for talk submissions  
 
Windows Azure Websites has a feature which allows you to replace Web.config AppSettings at deploy time and configure the values in the Windows Azure portal. We use this.
