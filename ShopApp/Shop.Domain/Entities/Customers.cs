using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using ShopApp.Domain.Common;

namespace ShopApp.Domain.Entities
{
    public class Customers : EntityBase
    {
        [Required]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }

        [Required]
        public string? FirstName { get; set; }


        [Required]
        public string? LastName { get; set; }

        [Required]
        public DateTime? BirthofDate { get; set; }


        [Required]
        public DateTime? RegisterDate { get; set; }

        [Required]
        public string? Addres { get; set; }

        [Required]
        public string? PhoneNumber { get; set; }
    }
}
