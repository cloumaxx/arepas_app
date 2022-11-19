using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using ShopApp.Domain.Common;

namespace Shop.Domain.Entities
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
