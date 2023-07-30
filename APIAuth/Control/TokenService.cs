using APIAuth.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace APIAuth.Control
{
    public static class TokenService
    {
        public static Token GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Settings.Secret());
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Username.ToString())
                }),
                Expires = DateTime.UtcNow.AddHours(24),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var getToken = tokenHandler.CreateToken(tokenDescriptor);
            Token token = new Token()
            {
                Created = DateTime.Now,
                Expiration = DateTime.Now.AddHours(24),
                AccessToken = tokenHandler.WriteToken(getToken)
            };
            return token;
        }
    }
}
