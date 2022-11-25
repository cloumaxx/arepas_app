using System.Threading.Tasks;
using System.Linq.Expressions;
using Arepas.Domain.Entities.Models;
using Arepas.Domain.Entities.Dto;

namespace Arepas.Application.Interfaces
{
    public  interface IProductService
    {
        public Task<Products> AddAsync(Products entity);

        public Task<IEnumerable<Products>> GetAllAsync();

        public Task<PaginationResult<Products>> GetByPageAsync(PaginationParams @params);

        public Task<IEnumerable<Products>> SearchAsync(string queryValue);

        public Task<Products> GetByIdAsync(int id);

        public Task<IEnumerable<Products>> FindAsync(Expression<Func<Products, bool>> predicate);

        public Task<Products> UpdateAsync(int id, Products entity);

        public Task RemoveAsync(int id);
    }
}