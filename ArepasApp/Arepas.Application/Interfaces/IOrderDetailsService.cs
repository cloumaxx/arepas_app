using Arepas.Domain.Entities.Dto;
using Arepas.Domain.Entities.Models;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Arepas.Application.Interfaces
{
    public interface IOrderDetailsService
    {
        public Task<OrderDetails> AddOrderDetails(OrderDetails orderDetails);

        public Task<IEnumerable<OrderDetails>> GetAllAsync();

        public Task<PaginationResult<OrderDetails>> GetByPageAsync(PaginationParams @params);

        public Task<PaginationResult<OrderDetails>> GetByOrderAsync(int id);

        public Task<OrderDetails> GetByIdAsync(int id);

        public Task<IEnumerable<OrderDetails>> FindAsync(Expression<Func<OrderDetails, bool>> predicate);

        public Task<OrderDetails> UpdateAsync(int id, OrderDetails entity);

        public Task RemoveAsync(int id);
    }
}