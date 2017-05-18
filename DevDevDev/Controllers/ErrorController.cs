using System.Web.Mvc;

namespace DevDevDev.Controllers
{
    public class ErrorController : Controller
    {
        public ActionResult Index()
        {
            return new RedirectResult("https://www.dddmelbourne.com/error/?");
        }

        public ActionResult NotFound()
        {
            return new RedirectResult("https://www.dddmelbourne.com/404/?");
        }
    }
}