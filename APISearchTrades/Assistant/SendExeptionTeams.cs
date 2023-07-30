using SearchTrades.Infra.Messaging;
using SearchTrades.Infra.Models;

namespace APISearchTrades.Assistant
{
    public class SendExeptionTeams
    {
        public void SendExption(string erro)
        {
            TeamsMessageSender teamsMessageSender = new TeamsMessageSender();
			try
			{
                TeamsMessage teamsMessage = new TeamsMessage()
                {
                    Title = "Erro",
                    Content = erro
                };
                teamsMessageSender.Send(teamsMessage);
			}
			catch (Exception ex)
			{
                Console.WriteLine(ex.Message);
			}
        }
    }
}
