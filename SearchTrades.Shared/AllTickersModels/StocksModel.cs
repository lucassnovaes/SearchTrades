using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SearchTrades.Shared.AllTickersModels
{
    public class StocksModel
    {
        public string stock { get; set; }
        public string name { get; set; }
        public string close { get; set; }
        public string change { get; set; }
        public int volume { get; set; }
        public string? market_cap { get; set; }
        public string logo { get; set; }
        public string sector { get; set; }
    }
}
