using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SearchTrades.Shared.Models
{
    public class HistoricalDataPriceModel
    {
        public int date { get; set; }
        public double open { get; set; }
        public double high { get; set; }
        public double low { get; set; }
        public double close { get; set; }
        public int volume { get; set; }
        public double adjustedClose { get; set; }
    }
}
