using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevDevDev.Infrastructure
{
    public static class ExtensionMethods
    {
        public static string FormatForHtml(this string input)
        {
            var result = HttpUtility.HtmlEncode(input).Replace("\n", "<br/>");


            return result;
        }
    }
}