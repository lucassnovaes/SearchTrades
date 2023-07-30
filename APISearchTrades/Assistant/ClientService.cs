using Newtonsoft.Json;
using SearchTrades.Shared.AllTickersModels;
using SearchTrades.Shared.Models;

namespace APISearchTrades.Assistant
{
    public class ClientService
    {
        public async Task<RootModel>  getDetailsTicker(string ticker)
        {
            RootModel rootModel = new RootModel();
            try
            {
                using (HttpClient httpClient = new HttpClient())
                {
                    string apiUrl = $"https://brapi.dev/api/quote/{ticker}";
                    HttpResponseMessage response = await httpClient.GetAsync(apiUrl);

                    if (response.IsSuccessStatusCode)
                    {
                        string jsonResponse = await response.Content.ReadAsStringAsync();
                        rootModel = JsonConvert.DeserializeObject<RootModel>(jsonResponse);
                        Console.WriteLine(jsonResponse);
                    }
                    else
                    {
                        Console.WriteLine($"Erro: {response.StatusCode} - {response.ReasonPhrase}");
                    }
                }
            }
			catch (Exception ex)
			{
				throw ex;
			}
            return rootModel;
        }

        public async Task<IndexStocksModel> getAllDetailsTicker()
        {
            IndexStocksModel rootModel = new IndexStocksModel();
            try
            {
                using (HttpClient httpClient = new HttpClient())
                {
                    string apiUrl = $"https://brapi.dev/api/quote/list";
                    HttpResponseMessage response = await httpClient.GetAsync(apiUrl);

                    if (response.IsSuccessStatusCode)
                    {
                        string jsonResponse = await response.Content.ReadAsStringAsync();
                        rootModel = JsonConvert.DeserializeObject<IndexStocksModel>(jsonResponse);
                        Console.WriteLine(jsonResponse);
                    }
                    else
                    {
                        Console.WriteLine($"Erro: {response.StatusCode} - {response.ReasonPhrase}");
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return rootModel;
        }
    }
}
