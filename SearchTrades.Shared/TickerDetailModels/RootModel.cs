using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SearchTrades.Shared.Models
{
    public class RootModel
    {
        public List<ResultModel> results { get; set; }
        public DateTime requestedAt { get; set; }
    }
}
