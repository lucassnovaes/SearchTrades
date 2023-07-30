using APIAuth.Models;
using MongoDB.Driver;
using System.Collections.Generic;

namespace APIAuth.DAL
{
    public class UsersDAL
    {
        public Users GetUsers(string user, string password)
        {
            Users users = new Users();
            try
            {
                MongoDbContext dbContext = new MongoDbContext();
                var users2 = dbContext.Users.Find(x => x.User.Equals(user) && x.Password.Equals(password)).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return users;
        }
    }
}
