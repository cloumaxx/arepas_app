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
    public class CustomersController : ControllerBase
    {
        private readonly ICustomerService _customerService;

        public CustomersController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        // GET: api/<CustomersController>
        [HttpGet]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(List<Customers>))]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError, Type = typeof(ErrorDetails))]
        public async Task<IActionResult> Get(
             [FromQuery] PaginationParams paginationParams, string? q = null
             )
        {
            // Normal Execution
            if (paginationParams.Page == 0)
            {
                return Ok(await _customerService.GetAllAsync());
            }

            // Search
            if (q != null)
            {
                return Ok(await _customerService.SearchAsync(q));
            }
            var paginationResult = await _customerService.GetByPageAsync(paginationParams);

            Response.Headers.Add("X-Total-Count", paginationResult.XTotalCount.ToString());
            Response.Headers.Add("Link", paginationResult.Links);

            return Ok(paginationResult.Item);
            //            return Ok(await _productService.GetAllAsync());
        }

        // GET api/<CustomersController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                return Ok(await _customerService.GetByIdAsync(id));
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }

        // POST api/<CustomersController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Customers category)
        {
            return Ok(await _customerService.AddAsync(category));
        } 
       

        // PUT api/<CustomersController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Customers customer)
        {
            try
            {
                return Ok(await _customerService.UpdateAsync(id, customer));
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

        // DELETE api/<CustomersController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _customerService.RemoveAsync(id);
                return Ok();
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
        // Get api/<CustomersController>
        [HttpGet("Login")]
        public async Task<IActionResult> Login([FromQuery] LoginDto loginDto)
        {

            return Ok(await _customerService.Login(loginDto));


        }
    }

}