using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SearchTrades.Shared.Models
{
    public class DividendsDataModel
    {
        public List<object> cashDividends { get; set; }
        public List<object> stockDividends { get; set; }
        public List<object> subscriptions { get; set; }
    }
}
