using System.Web.Optimization;

namespace DevDevDev
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/libs")
                .Include("~/Scripts/vendor/jquery.validate.js")
                .Include("~/Scripts/vendor/jquery.validate.unobtrusive.js")
                .Include("~/scripts/vendor/foundation.js")
                .Include("~/scripts/foundation/foundation.magellan.js")
                .Include("~/scripts/foundation/foundation.responsivetables.js"));
            
            bundles.Add(new ScriptBundle("~/bundles/site")
            .Include("~/scripts/site.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular")
                 .Include("~/scripts/vendor/angular.js"));
              
            bundles.Add(new StyleBundle("~/bundles/css")
                .Include("~/Content/css/normalize.css")
                .Include("~/Content/css/site.css"));
        }
    }
}