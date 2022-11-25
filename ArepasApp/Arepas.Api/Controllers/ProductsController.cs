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
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        // GET: api/<ProductsController>
        [HttpGet]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(List<Products>))]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError, Type = typeof(ErrorDetails))]
        public async Task<IActionResult> Get(
            [FromQuery] PaginationParams paginationParams , string? q=null
            )
        {
              // Normal Execution
              if (paginationParams.Page == 0)
            {
                return Ok(await _productService.GetAllAsync());
            }

              // Search
              if (q != null)
            {
                return Ok(await _productService.SearchAsync(q));
            }            
              var paginationResult = await _productService.GetByPageAsync(paginationParams);

            Response.Headers.Add("X-Total-Count", paginationResult.XTotalCount.ToString());
            Response.Headers.Add("Link", paginationResult.Links);
            
            return Ok(paginationResult.Item);
        }

       
        // GET api/<ProductsController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                return Ok(await _productService.GetByIdAsync(id));
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }     
    }

}
