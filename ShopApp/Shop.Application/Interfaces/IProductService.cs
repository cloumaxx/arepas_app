using ShopApp.Domain.Entities;
using System.Threading.Tasks;
using System.Linq.Expressions;
using Shop.Domain.Entities;

namespace ShopApp.Application.Interfaces
{
    public  interface IProductService
    {
        public Task<Products> AddAsync(Products entity);

        public Task<IEnumerable<Products>> GetAllAsync();

        public Task<Products> GetByIdAsync(int id);

        public Task<IEnumerable<Products>> FindAsync(Expression<Func<Products, bool>> predicate);

        public Task<Products> UpdateAsync(int id, Products entity);

        public Task RemoveAsync(int id);
    }
}