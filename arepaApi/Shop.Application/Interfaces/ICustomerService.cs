using ShopApp.Domain.Entities;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Shop.Domain.Entities;

namespace ShopApp.Application.Interfaces
{
    public interface ICustomerService
    {
        public Task<Customers> AddAsync(Customers entity);

        public Task<IEnumerable<Customers>> GetAllAsync();

        public Task<Customers> GetByIdAsync(int id);

        public Task<IEnumerable<Customers>> FindAsync(Expression<Func<Customers, bool>> predicate);

        public Task<Customers> UpdateAsync(int id, Customers entity);

        public Task RemoveAsync(int id);
    }
}