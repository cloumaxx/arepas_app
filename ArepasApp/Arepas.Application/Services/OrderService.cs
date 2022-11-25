using Application.Exceptions;
using Arepas.Domain.Exceptions;
using Arepas.Application.Interfaces;
using Arepas.Domain.Interfaces.Repositories;

using System.Linq.Expressions;
using Arepas.Domain.Entities.Models;
using Arepas.Domain.Entities.Dto;

namespace Arepas.Application.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;

        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public async Task<Orders> AddAsync(Orders entity)
        {
            return await _orderRepository.AddAsync(entity);
        }

        public async Task<IEnumerable<Orders>> FindAsync(Expression<Func<Orders, bool>> predicate)
        {
            return await _orderRepository.FindAsync(predicate);
        }

        public async Task<IEnumerable<Orders>> GetAllAsync()
        {
            return await _orderRepository.GetAllAsync();
        }

        public Task<PaginationResult<Orders>> GetByPageAsync(PaginationParams @params)
        {
            return _orderRepository.GetByPageAsync(@params);
        }

        public Task<IEnumerable<Orders>> SearchAsync(string queryValue)
        {
            return _orderRepository.SearchAsync(queryValue);

        }

        public Task<PaginationResult<Orders>> GetByCustomerAsync(int id)
        {
            var order =  _orderRepository.GetByCustomerAsync(id);

            if(order == null)
            {
                throw new NotFoundException($"Order with Id={id} Not Found");
            }

            return order; 
        }

        public async Task<Orders> GetByIdAsync(int id)
        {
            var product = await _orderRepository.GetByIdAsync(id);

            if (product is null)
            {
                throw new NotFoundException($"Order with Id={id} Not Found");
            }

            return product;
        }

        public async Task RemoveAsync(int id)
        {
            var product = await _orderRepository.GetByIdAsync(id);

            if (product is null)
            {
                throw new NotFoundException($"Order with Id={id} Not Found");
            }

            await _orderRepository.RemoveAsync(product);
        }

        public async Task<Orders> UpdateAsync(int id, Orders entity)
        {
            if (id != entity.Id)
            {
                throw new BadRequestException($"The Id={id} not corresponding with Entity.Id={entity.Id}");
            }

            var category = await _orderRepository.GetByIdAsync(id);

            if (category is null)
            {
                throw new NotFoundException($"Order with Id={id} Not Found");
            }
            return (await _orderRepository.UpdateAsync(entity));
        }
    }
}