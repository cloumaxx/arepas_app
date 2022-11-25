using Arepas.Domain.Entities.Dto;
using Arepas.Domain.Entities.Models;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Arepas.Application.Interfaces
{
    public interface IOrderService
    {
        public Task<Orders> AddAsync(Orders entity);

        public Task<IEnumerable<Orders>> GetAllAsync();

        public Task<PaginationResult<Orders>> GetByPageAsync(PaginationParams @params);

        public Task<IEnumerable<Orders>> SearchAsync(string queryValue);

        public Task<PaginationResult<Orders>> GetByCustomerAsync(int id);

        public Task<Orders> GetByIdAsync(int id);

        public Task<IEnumerable<Orders>> FindAsync(Expression<Func<Orders, bool>> predicate);

        public Task<Orders> UpdateAsync(int id, Orders entity);

        public Task RemoveAsync(int id);
    }
}