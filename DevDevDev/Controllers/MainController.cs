
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;
using CaptchaMvc.Attributes;
using DevDevDev.Infrastructure;
using DevDevDev.Models;
using DevDevDev.Services;
using Newtonsoft.Json;

namespace DevDevDev.Controllers
{
    public class MainController : Controller
    {
        private readonly SessionSubmissionService _sessionSubmissionService = new SessionSubmissionService();
        private readonly SubmittedSessionsService _submittedSessionsService = new SubmittedSessionsService();
   
        public ActionResult Index()
        {
            return View();
        }

        [OutputCache(Duration = 3600)]
        public ActionResult Sessions()
        {
            var model = _submittedSessionsService.GetSubmittedSessions();

            return View(model);
        }

        public ActionResult Agenda()
        {
            return View("Agenda");
        }

        [HttpGet]
        public ActionResult Submit()
        {
            var viewModel = new SessionSubmissionViewModel();

            return View(viewModel);
        }

        [HttpGet]
        public ActionResult Yow()
        {
            var viewModel = new SessionSubmissionViewModel();

            return View(viewModel);
        }
        
        //NOTE: This controller action should only be used for the new website
        [HttpPost]
        [Throttle(Name = "ThrottleSubmit", Message = "Request throttled", Seconds = 5)]
        public ActionResult AddSession(SessionSubmissionViewModel viewModel)
        {
            try
            {
                var recaptchaRequest = new RecaptchaRequest
                {
                    Secret = ConfigurationManager.AppSettings["Google.ReCaptcha.Secret"],
                    Response = Request.Form["g-recaptcha-response"],
                    RemoteIp = Request.UserHostAddress
                };

                if (TryValidateModel(viewModel) && IsCaptchaValid(recaptchaRequest))
                {
                    if (_sessionSubmissionService.AddSession(viewModel))
                    {
                        return new RedirectResult("https://www.dddmelbourne.com/submit-a-session/success/");
                    }
                }
            }
            catch (Exception) {}
            
            return new RedirectResult("https://www.dddmelbourne.com/submit-a-session/failure/");
        }

        [HttpPost]
        [CaptchaVerify("Captcha is not valid")]
        [Throttle(Name = "ThrottleSubmit", Message = "Request throttled", Seconds = 5)]
        public ActionResult Submit(SessionSubmissionViewModel viewModel)
        {
            if (!TryValidateModel(viewModel))
            {
                return View(viewModel);
            }

            if (_sessionSubmissionService.AddSession(viewModel))
            {
                return RedirectToAction("SessionSubmittedSuccess");
            }

            return RedirectToAction("SubmitError");
        }

        public ActionResult Register()
        {
            return new RedirectResult("https://www.eventbrite.com.au/e/ddd-melbourne-7-2016-registration-25873934635");
        }

        public ActionResult SessionSubmittedSuccess()
        {
            return View();
        }

        public ActionResult SubmitError()
        {
            return View();
        }

        [HttpGet]
        public ActionResult CodeOfConduct()
        {
            return View();
        }

        private bool IsCaptchaValid(RecaptchaRequest captchaRequest)
        {
            using (var httpClient = new HttpClient())
            {
                var request = new HttpRequestMessage(HttpMethod.Post, "https://www.google.com/recaptcha/api/siteverify");
                request.Content = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("secret", captchaRequest.Secret),
                    new KeyValuePair<string, string>("response", captchaRequest.Response),
                    new KeyValuePair<string, string>("remoteip", captchaRequest.RemoteIp)
                });

                var response = httpClient.SendAsync(request).Result;
                request.Dispose();
                if (response != null && response.Content != null && response.IsSuccessStatusCode)
                {
                    var responseContent = response.Content.ReadAsStringAsync().Result;
                    response.Dispose();
                    if (responseContent != null)
                    {
                        var recaptchaResponse = JsonConvert.DeserializeObject<RecaptchaResponse>(responseContent);
                        return recaptchaResponse.Success;
                    }
                }

                return false;
            }
        }

        private class RecaptchaRequest
        {
            public string Secret { get; set; }
            public string Response { get; set; }
            public string RemoteIp { get; set; }
        }

        private class RecaptchaResponse
        {
            [JsonProperty("success")]
            public bool Success { get; set; }
        }
    }
}
