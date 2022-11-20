using Application.Exceptions;
using Shop.Domain.Entities;
using Shop.Domain.Exceptions;
using ShopApp.Application.Interfaces;
using ShopApp.Domain.Entities;
using ShopApp.Domain.Interfaces.Repositories;

using System.Linq.Expressions;

namespace ShopApp.Application.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<Products> AddAsync(Products entity)
        {
            return await _productRepository.AddAsync(entity);
        }

        public async Task<IEnumerable<Products>> FindAsync(Expression<Func<Products, bool>> predicate)
        {
            return await _productRepository.FindAsync(predicate);
        }

        public async Task<IEnumerable<Products>> GetAllAsync()
        {
            return await _productRepository.GetAllAsync();
        }

        public async Task<Products> GetByIdAsync(int id)
        {
            var product = await _productRepository.GetByIdAsync(id);

            if (product is null)
            {
                throw new NotFoundException($"Product with Id={id} Not Found");
            }

            return product;
        }

        public async Task RemoveAsync(int id)
        {
            var product = await _productRepository.GetByIdAsync(id);

            if (product is null)
            {
                throw new NotFoundException($"Product with Id={id} Not Found");
            }

            await _productRepository.RemoveAsync(product);
        }

        public async Task<Products> UpdateAsync(int id, Products entity)
        {
            if (id != entity.Id)
            {
                throw new BadRequestException($"The Id={id} not corresponding with Entity.Id={entity.Id}");
            }

            var category = await _productRepository.GetByIdAsync(id);

            if (category is null)
            {
                throw new NotFoundException($"Product with Id={id} Not Found");
            }
            return (await _productRepository.UpdateAsync(entity));
        }
    }
}