using Newtonsoft.Json;
using SearchTrades.Infra.Models;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace SearchTrades.Infra.Messaging
{
    public sealed class TeamsMessageSender
    {
        private static readonly HttpClient _httpClient = new HttpClient();

        private readonly IConfiguration _config;

        public TeamsMessageSender(IConfiguration config)
        {
            _config = config;
        }

        public void Send(TeamsMessage message)
        {

            string url = _config.GetSection("WebhookUrl").Value;

            if (string.IsNullOrEmpty(url))
                throw new ArgumentNullException("Parâmetro WebhookUrl não encontrado no config.");

            var request = JsonConvert.SerializeObject(message);

            var response = _httpClient.PostAsync(url, new StringContent(request, Encoding.UTF8, "application/json")).Result;

            if (response.IsSuccessStatusCode)
                Console.WriteLine("Mensagem enviada com sucesso!");
        }
    }
}
