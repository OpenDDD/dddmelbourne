
using System.Web.Mvc;
using CaptchaMvc.Attributes;
using DevDevDev.Infrastructure;
using DevDevDev.Models;
using DevDevDev.Services;

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

        /*public ActionResult Register()
        {
            return new RedirectResult("https://www.eventbrite.com.au/e/ddd-melbourne-6-2015-registration-16657196122/");
        }*/

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
    }
}
