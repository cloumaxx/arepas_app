using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Arepas.Domain.Common;

namespace Arepas.Domain.Entities.Models
{

        public class Orders : EntityBase
        {
            [Required]
            public int? CustomerId { get; set; }

            [Required]
            public DateTime? CretedDate { get; set; }
            
            [Required]
            public string? DeliveryFirstName { get; set; }


            [Required]
            public string? DeliveryLastName { get; set; }

            [Required]
            public string? DeliveryAddress { get; set; }

            [Required]
            public string? DeliveryPhoneNumber { get; set; }

            [Required]
            public string? Notes { get; set; }

            [Required]
            public decimal? TotalOrder { get; set; }
        }
}

