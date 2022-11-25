using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Arepas.Domain.Common;

namespace Arepas.Domain.Entities.Models
{
    public class Products : EntityBase
    {
        [Required]
        public string? Name { get; set; }

        [Required]
        public string? Description { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public string? ImageName { get; set; }

    }
}
