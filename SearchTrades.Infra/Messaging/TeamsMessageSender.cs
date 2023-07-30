using Newtonsoft.Json;
using SearchTrades.Infra.Models;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualBasic;
using SearchTrades.Infra.Constant;

namespace SearchTrades.Infra.Messaging
{
    public sealed class TeamsMessageSender
    {
        private static readonly HttpClient _httpClient = new HttpClient();

        public void Send(TeamsMessage message)
        {

            string url = Cons.webHook();

            if (string.IsNullOrEmpty(url))
                throw new ArgumentNullException("Parâmetro WebhookUrl não encontrado no config.");

            var request = JsonConvert.SerializeObject(message);

            var response = _httpClient.PostAsync(url, new StringContent(request, Encoding.UTF8, "application/json")).Result;

            if (response.IsSuccessStatusCode)
                Console.WriteLine("Mensagem enviada com sucesso!");
        }
    }
}
