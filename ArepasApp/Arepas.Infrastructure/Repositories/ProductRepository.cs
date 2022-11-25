using Arepas.Domain.Entities.Dto;
using Arepas.Domain.Entities.Models;
using Arepas.Domain.Interfaces.Repositories;
using Arepas.Infrastructure.Common;
using Arepas.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arepas.Infrastructure.Repositories
{
    public class ProductRepository : Repository<Products>, IProductRepository
    {
        private readonly AppDbContext _appDbContext;

        public ProductRepository(AppDbContext appDbContext) : base(appDbContext)
        {
            _appDbContext = appDbContext;

        }
        public async Task<PaginationResult<Products>> GetByPageAsync(PaginationParams @params)
        {
            var products = _appDbContext.Products.OrderBy(x => x.Id);

            var xTotalCount = products.Count();

            var items = await products.OrderBy(p => p.Id)
                .Skip((@params.Page - 1) * @params.Limit)
                .Take(@params.Limit)
                .ToListAsync<Products>();

            return new PaginationResult<Products>()
            {
                XTotalCount = xTotalCount,
                Links = @"<links>",
                Item = items
            };

        }
        public async Task<IEnumerable<Products>> SearchAsync(string queryValue)
        {
#pragma warning disable CS8602 // Dereference of a possibly null reference.
            var products = await _appDbContext.Products
                .Where(x => x.Name.Contains(queryValue)
                || x.Description.Contains(queryValue)
                || x.ImageName.Contains(queryValue)
              )
                .ToListAsync();
#pragma warning restore CS8602 // Dereference of a possibly null reference.
            return products;
        }

    }
}

