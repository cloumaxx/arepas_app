using Application.Exceptions;
using Arepas.Domain.Exceptions;
using Arepas.Application.Interfaces;
using Arepas.Domain.Interfaces.Repositories;

using System.Linq.Expressions;
using Arepas.Domain.Entities.Models;
using Arepas.Domain.Entities.Dto;

namespace Arepas.Application.Services
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

        public Task<PaginationResult<Products>> GetByPageAsync(PaginationParams @params)
        {
            return _productRepository.GetByPageAsync(@params);
        }

        public Task<IEnumerable<Products>> SearchAsync(string queryValue)
        {
            return _productRepository.SearchAsync(queryValue);

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