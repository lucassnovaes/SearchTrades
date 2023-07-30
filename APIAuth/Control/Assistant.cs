using APIAuth.Models;
using SecureAccessStandard;

namespace APIAuth.Control
{
    public class Assistant
    {
        public User GetUser(string authentication)
        {
            SecurityAccess security = new SecurityAccess();
            User usr = new User();
            try
            {
                if (!string.IsNullOrWhiteSpace(authentication))
                {
                    var authSplit = authentication.Split(':');
                    if (authSplit.Length == 2)
                    {
                        usr.Username = security.Decryption(authSplit[0].ToString());
                        usr.Password = security.Decryption(authSplit[1].ToString());
                    }
                    else
                        throw new ArgumentException("Invalid parameter: authentication");
                }
                else
                    throw new ArgumentException("Invalid parameter: authentication");
            }
            catch (ArgumentException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return usr;
        }
        public string GetEncryptUser(string user, string password)
        {
            SecurityAccess security = new SecurityAccess();
            User users = new User();
            string accessEncrypt = string.Empty;
            try
            {
                if (!string.IsNullOrWhiteSpace(user) && !string.IsNullOrWhiteSpace(password))
                {
                    users.Username = security.Encryption(user);
                    users.Password = security.Encryption(password);
                    accessEncrypt = $"{users.Username}:{users.Password}";
                }
                else
                    throw new ArgumentException("Invalid parameter: user or password");
            }
            catch (ArgumentException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return accessEncrypt;
        }
    }
}
