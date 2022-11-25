using Arepas.Domain.Common;
using Arepas.Domain.Entities.Dto;
using Arepas.Domain.Entities.Models;

namespace Arepas.Domain.Interfaces.Repositories
{
    public interface ICustomerRepository : IRepository<Customers>
    {
        public Task<PaginationResult<Customers>> GetByPageAsync(PaginationParams @params);

        public Task<IEnumerable<Customers>> SearchAsync(string queryValue);

    }
}