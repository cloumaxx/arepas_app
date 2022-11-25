using Application.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Arepas.Api.Middleware;
using Arepas.Domain.Exceptions;
using Arepas.Application.Interfaces;
using System.Net;
using Arepas.Domain.Entities.Models;
using Arepas.Domain.Entities.Dto;

namespace Arepas.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class OrdersDetailsController : ControllerBase
    {
        private readonly IOrderDetailsService _orderDetailsService;

        public OrdersDetailsController(IOrderDetailsService orderDetailsService)
        {
            _orderDetailsService = orderDetailsService;
        }

        // GET: api/<OrderDetailssController>
    
        [HttpGet]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(List<OrderDetails>))]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError, Type = typeof(ErrorDetails))]
        public async Task<IActionResult> Get(
            [FromQuery] PaginationParams paginationParams
            )
        {
            // Normal Execution
            if (paginationParams.Page == 0)
            {
                return Ok(await _orderDetailsService.GetAllAsync());
            }

            
            var paginationResult = await _orderDetailsService.GetByPageAsync(paginationParams);

            Response.Headers.Add("X-Total-Count", paginationResult.XTotalCount.ToString());
            Response.Headers.Add("Link", paginationResult.Links);

            return Ok(paginationResult.Item);
            //            return Ok(await _productService.GetAllAsync());
        }
        [HttpGet("Order/{id}")]
        public async Task<IActionResult> GetOrodersCustomers(
          int id)
        {
            var paginationResult = await _orderDetailsService.GetByOrderAsync(id);

            Response.Headers.Add("X-Total-Count", paginationResult.XTotalCount.ToString());

            Response.Headers.Add("Link", paginationResult.Links);

            return Ok(paginationResult.Item);

        }
        // GET api/<OrderDetailssController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                return Ok(await _orderDetailsService.GetByIdAsync(id));
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }

        // POST api/<OrderDetailssController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] OrderDetails category)
        {
            try
            {
                return Ok(await _orderDetailsService.AddOrderDetails(category));
            }catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            
        }


        // PUT api/<OrderDetailssController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] OrderDetails orderDetails)
        {
            try
            {
                return Ok(await _orderDetailsService.UpdateAsync(id, orderDetails));
            }
            catch (BadRequestException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }

        // DELETE api/<OrderDetailssController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _orderDetailsService.RemoveAsync(id);
                return Ok();
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }

}