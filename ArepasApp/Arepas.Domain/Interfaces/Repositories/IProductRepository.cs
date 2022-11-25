using Arepas.Domain.Common;
using Arepas.Domain.Entities.Dto;
using Arepas.Domain.Entities.Models;

namespace Arepas.Domain.Interfaces.Repositories
{
    public interface IProductRepository : IRepository<Products>
    {
        public Task<PaginationResult<Products>> GetByPageAsync(PaginationParams @params);

        public Task<IEnumerable<Products>> SearchAsync(string queryValue);
    }
}
