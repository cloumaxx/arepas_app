using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Arepas.Domain.Common;

namespace Arepas.Domain.Entities.Models
{
    public class Customers : EntityBase
    {
        [Required]
        [EmailAddress(ErrorMessage = " Email Incorrecto")]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }

        [Required]
        public string? FirstName { get; set; }

        [Required]
        public string? LastName { get; set; }

        [Required]
        [MinimunAge(16)]
        public DateTime? BirthOfDate { get; set; }

        [Required]
        public DateTime? RegisterDate { get; set; }

        [Required]
        public string? Address { get; set; }

        [Required]
        public string? PhoneNumber { get; set; }
    }
}
