using Arepas.Domain.Entities.Dto;
using Arepas.Domain.Entities.Models;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Arepas.Application.Interfaces
{
    public interface ICustomerService
    {
        public Task<Customers> AddAsync(Customers entity);

        public Task<IEnumerable<Customers>> GetAllAsync();

        public Task<PaginationResult<Customers>> GetByPageAsync(PaginationParams @params);

        public Task<IEnumerable<Customers>> SearchAsync(string queryValue);

        public Task<Customers> GetByIdAsync(int id);

        public Task<IEnumerable<Customers>> FindAsync(Expression<Func<Customers, bool>> predicate);

        public Task<Customers> UpdateAsync(int id, Customers entity);

        public Task RemoveAsync(int id);

        public Task<IEnumerable<Customers>> Login(LoginDto loginDto);

    }
}