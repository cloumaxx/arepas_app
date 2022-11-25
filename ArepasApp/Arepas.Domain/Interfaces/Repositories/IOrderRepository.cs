using Arepas.Domain.Common;
using Arepas.Domain.Entities.Dto;
using Arepas.Domain.Entities.Models;

namespace Arepas.Domain.Interfaces.Repositories
{
    public interface IOrderRepository : IRepository<Orders>
    {
        public Task<PaginationResult<Orders>> GetByPageAsync(PaginationParams @params);

        public Task<IEnumerable<Orders>> SearchAsync(string queryValue);
        public Task<PaginationResult<Orders>> GetByCustomerAsync(int id);

    }
}