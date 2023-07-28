namespace APIAuth.Control
{
    public static class Settings
    {
        private static IConfigurationBuilder GetConfigurationBuilder()
        {
            return new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");
        }
        public static string Secret()
        {
            var builder = GetConfigurationBuilder();
            var config = builder.Build();
            return config[$"Security:Token"].ToString();
        }
    }
}
