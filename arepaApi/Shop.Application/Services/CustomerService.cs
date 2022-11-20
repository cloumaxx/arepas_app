using Application.Exceptions;
using Shop.Domain.Exceptions;
using ShopApp.Application.Interfaces;
using ShopApp.Domain.Entities;
using ShopApp.Domain.Interfaces.Repositories;

using System.Linq.Expressions;

namespace ShopApp.Application.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _productRepository;

        public CustomerService(ICustomerRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<Customers> AddAsync(Customers entity)
        {
            return await _productRepository.AddAsync(entity);
        }

        public async Task<IEnumerable<Customers>> FindAsync(Expression<Func<Customers, bool>> predicate)
        {
            return await _productRepository.FindAsync(predicate);
        }

        public async Task<IEnumerable<Customers>> GetAllAsync()
        {
            return await _productRepository.GetAllAsync();
        }

        public async Task<Customers> GetByIdAsync(int id)
        {
            var product = await _productRepository.GetByIdAsync(id);

            if (product is null)
            {
                throw new NotFoundException($"Customer with Id={id} Not Found");
            }

            return product;
        }

        public async Task RemoveAsync(int id)
        {
            var product = await _productRepository.GetByIdAsync(id);

            if (product is null)
            {
                throw new NotFoundException($"Customer with Id={id} Not Found");
            }

            await _productRepository.RemoveAsync(product);
        }

        public async Task<Customers> UpdateAsync(int id, Customers entity)
        {
            if (id != entity.Id)
            {
                throw new BadRequestException($"The Id={id} not corresponding with Entity.Id={entity.Id}");
            }

            var category = await _productRepository.GetByIdAsync(id);

            if (category is null)
            {
                throw new NotFoundException($"Customer with Id={id} Not Found");
            }
            return (await _productRepository.UpdateAsync(entity));
        }
    }
}