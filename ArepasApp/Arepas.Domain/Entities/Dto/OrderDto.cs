using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arepas.Domain.Entities.Dto
{
    public class OrderDto
    {
        public int? CustomerId { get; set; }

        public DateTime? CreatedDate { get; set; }

        public string? DeliveryFirstName { get; set; }

        public string? DeliveryLastName { get; set; }

        public string? DeliveryAddress { get; set; }

        public string? DeliveryPhoneNumber { get; set; }

        public string? Notes { get; set; }

        public decimal? TotalOrder { get; set; }
    }
}
