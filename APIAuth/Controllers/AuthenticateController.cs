using APIAuth.Control;
using APIAuth.DAL;
using Microsoft.AspNetCore.Mvc;

namespace APIAuth.Controllers
{
    [Route("v1/api/[controller]")]
    public class AuthenticateController : ControllerBase
    {
        [HttpGet]
        public ActionResult Login([FromHeader] string auth)
        {
            UsersDAL usersDAL = new UsersDAL();
            Assistant assistant = new Assistant();
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var userApp = assistant.GetUser(auth);
                var resultUser = usersDAL.GetUsers(userApp.Username, userApp.Password);

                var tokenAuth = TokenService.GenerateToken(userApp);
                return Ok(tokenAuth);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                //TODO: Implementar escrita de log;
            }
        }

        #region Metodo Interno - Criptografia
        [HttpGet]
        [Route("Encript")]
        //[ApiExplorerSettings(IgnoreApi = true)] //Método de uso interno
        public ActionResult GetEncryptUser(string user, string password)
        {
            Assistant assistant = new Assistant();
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var userEncrypt = assistant.GetEncryptUser(user, password);
                return Ok(userEncrypt);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        #endregion
    }
}
