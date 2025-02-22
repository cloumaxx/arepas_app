﻿using Application.Exceptions;
using Arepas.Domain.Exceptions;
using Arepas.Application.Interfaces;
using Arepas.Domain.Interfaces.Repositories;

using System.Linq.Expressions;
using Arepas.Domain.Entities.Models;
using Arepas.Domain.Entities.Dto;

namespace Arepas.Application.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomerService(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public async Task<Customers> AddAsync(Customers entity)
        {
            return await _customerRepository.AddAsync(entity);
        }

        public async Task<IEnumerable<Customers>> FindAsync(Expression<Func<Customers, bool>> predicate)
        {
            return await _customerRepository.FindAsync(predicate);
        }

        public async Task<IEnumerable<Customers>> GetAllAsync()
        {
            return await _customerRepository.GetAllAsync();
        }

        public Task<PaginationResult<Customers>> GetByPageAsync(PaginationParams @params)
        {
            return  _customerRepository.GetByPageAsync(@params);
        }

        public Task<IEnumerable<Customers>> SearchAsync(string queryValue)
        {
            return  _customerRepository.SearchAsync(queryValue);

        }


        public async Task<Customers> GetByIdAsync(int id)
        {
            var product = await _customerRepository.GetByIdAsync(id);

            if (product is null)
            {
                throw new NotFoundException($"Customer with Id={id} Not Found");
            }

            return product;
        }

        public async Task RemoveAsync(int id)
        {
            var product = await _customerRepository.GetByIdAsync(id);

            if (product is null)
            {
                throw new NotFoundException($"Customer with Id={id} Not Found");
            }

            await _customerRepository.RemoveAsync(product);
        }

        public async Task<Customers> UpdateAsync(int id, Customers entity)
        {
            if (id != entity.Id)
            {
                throw new BadRequestException($"The Id={id} not corresponding with Entity.Id={entity.Id}");
            }

            var category = await _customerRepository.GetByIdAsync(id);

            if (category is null)
            {
                throw new NotFoundException($"Customer with Id={id} Not Found");
            }
            return (await _customerRepository.UpdateAsync(entity));
        }
    }
}