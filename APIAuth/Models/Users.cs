using System.ComponentModel.DataAnnotations;

namespace APIAuth.Models
{
    public class Users
    {
        public Guid Id { get; set; }
        public string User { get; set; }
        public string Password { get; set; }

    }
}
