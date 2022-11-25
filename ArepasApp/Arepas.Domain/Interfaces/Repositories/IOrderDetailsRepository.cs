using Arepas.Domain.Common;
using Arepas.Domain.Entities.Dto;
using Arepas.Domain.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arepas.Domain.Interfaces.Repositories
{
    public interface IOrderDetailsRepository : IRepository<OrderDetails>
    {
        public Task<PaginationResult<OrderDetails>> GetByPageAsync(PaginationParams @params);

        public Task<OrderDetails> AddOrderDetails(OrderDetails orderDetails);

        public Task<PaginationResult<OrderDetails>> GetByOrderAsync(int id);

    }
}