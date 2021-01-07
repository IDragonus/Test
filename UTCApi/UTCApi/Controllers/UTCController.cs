using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UTCApi.Models;

namespace UTCApi.Controllers
{
    public class UTCController : Controller
    {
        [HttpPost]
        public UTC GetUTC(DateTime date, string timeZone)
        {
            TimeZoneInfo timeZoneInfo = TimeZoneInfo.FindSystemTimeZoneById(timeZone);
            DateTime time = TimeZoneInfo.ConvertTimeToUtc(date, timeZoneInfo);
            UTC utcFormat = new UTC()
            {
                time = time,
                timezone = 'utc'
            };
            return utcFormat;
        }
    }
}
