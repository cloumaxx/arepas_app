using Application.Exceptions;
using Arepas.Domain.Exceptions;
using Arepas.Application.Interfaces;
using Arepas.Domain.Interfaces.Repositories;

using System.Linq.Expressions;
using Arepas.Domain.Entities.Models;
using Arepas.Domain.Entities.Dto;

namespace Arepas.Application.Services
{
    public class OrderDetailsService : IOrderDetailsService
    {
        private readonly IOrderDetailsRepository _orderDetailsRepository;

        public OrderDetailsService(IOrderDetailsRepository orderDetailsRepository)
        {
            _orderDetailsRepository = orderDetailsRepository;
        }
        public async Task<OrderDetails> AddOrderDetails(OrderDetails orderDetails)
        {
            return await _orderDetailsRepository.AddOrderDetails(orderDetails);
        }

        public async Task<IEnumerable<OrderDetails>> FindAsync(Expression<Func<OrderDetails, bool>> predicate)
        {
            return await _orderDetailsRepository.FindAsync(predicate);
        }
        public async Task<PaginationResult<OrderDetails>> GetByOrderAsync(int id)
        {
            return await _orderDetailsRepository.GetByOrderAsync(id);
        }
        public async Task<IEnumerable<OrderDetails>> GetAllAsync()
        {
            return await _orderDetailsRepository.GetAllAsync();
        }

        public Task<PaginationResult<OrderDetails>> GetByPageAsync(PaginationParams @params)
        {
            return _orderDetailsRepository.GetByPageAsync(@params);
        }

      

        public async Task<OrderDetails> GetByIdAsync(int id)
        {
            var product = await _orderDetailsRepository.GetByIdAsync(id);

            if (product is null)
            {
                throw new NotFoundException($"OrderDetails with Id={id} Not Found");
            }

            return product;
        }

        public async Task RemoveAsync(int id)
        {
            var product = await _orderDetailsRepository.GetByIdAsync(id);

            if (product is null)
            {
                throw new NotFoundException($"OrderDetails with Id={id} Not Found");
            }

            await _orderDetailsRepository.RemoveAsync(product);
        }

        public async Task<OrderDetails> UpdateAsync(int id, OrderDetails entity)
        {
            if (id != entity.Id)
            {
                throw new BadRequestException($"The Id={id} not corresponding with Entity.Id={entity.Id}");
            }

            var category = await _orderDetailsRepository.GetByIdAsync(id);

            if (category is null)
            {
                throw new NotFoundException($"OrderDetails with Id={id} Not Found");
            }
            return (await _orderDetailsRepository.UpdateAsync(entity));
        }
    }
}