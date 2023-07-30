using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SearchTrades.Shared.AllTickersModels
{
    public class IndexStocksModel
    {
        public List<IndexTickersModel> indexes { get; set; }
        public List<StocksModel> stocks { get; set; }
    }
}
