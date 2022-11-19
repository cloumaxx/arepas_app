using Shop.Domain.Entities;
using ShopApp.Domain.Interfaces.Repositories;
using ShopApp.Infrastructure.Common;
using ShopApp.Infrastructure.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopApp.Infrastructure.Repositories
{
    public class ProductRepository : Repository<Products>, IProductRepository
    {
        public ProductRepository(AppDbContext appDbContext) : base(appDbContext)
        { 
        }

    }
}

