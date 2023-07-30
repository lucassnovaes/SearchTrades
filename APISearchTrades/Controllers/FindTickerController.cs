using APISearchTrades.Assistant;
using Microsoft.AspNetCore.Mvc;

namespace APISearchTrades.Controllers
{
    public class FindTickerController : Controller
    {
        [HttpGet]
        [Route("FindAllTickers")]
        public async Task<IActionResult> FindAllTickers()
        {
            try
            {
                ClientService clientService = new ClientService();
                var result = await clientService.getAllDetailsTicker();
                return Ok(result);
            }
            catch (Exception ex)
            {
                SendExeptionTeams sendExeption = new SendExeptionTeams();
                sendExeption.SendExption(ex.Message);
                return BadRequest();
            }

        }

        [HttpGet]
        [Route("FindByTicker")]
        public async Task<IActionResult> FindByTicker(string ticker)
        {
            try
            {
                if (!string.IsNullOrEmpty(ticker))
                {
                    ClientService clientService = new ClientService();
                    var result = await clientService.getDetailsTicker(ticker);
                    return Ok(result);
                }
                else
                    return BadRequest();
            }
            catch (Exception ex)
            {
                SendExeptionTeams sendExeption = new SendExeptionTeams();
                sendExeption.SendExption(ex.Message);
                return BadRequest();
            }

        }
    }
}
