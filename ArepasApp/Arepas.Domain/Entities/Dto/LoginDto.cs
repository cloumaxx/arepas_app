using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arepas.Domain.Entities.Dto
{
    internal class LoginDto
    {

        [Required(ErrorMessage = "El Email es requerido")]
        [StringLength(50, ErrorMessage = "La Cantidad maxima son 50 caracteres")]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }

    }
}
