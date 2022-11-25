using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Arepas.Domain.Common;

namespace Arepas.Domain.Entities.Models
{
    public class OrderDetails : EntityBase
    {
        [Required]
        public int? OrderId { get; set; }

        [Required]
        public int? ProductId { get; set; }

        [Required]
        public int? Quantity { get; set; }

        public decimal? TotalProduct { get; set; } 

      }
}


