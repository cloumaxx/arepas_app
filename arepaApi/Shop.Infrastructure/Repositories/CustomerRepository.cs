using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ShopApp.Domain.Interfaces.Repositories;
using ShopApp.Domain.Entities;
using ShopApp.Infrastructure.Common;
using ShopApp.Infrastructure.Context;

namespace ShopApp.Infrastructure.Repositories
{
    public class CustomerRepository : Repository<Customers>, ICustomerRepository
    {
        public CustomerRepository(AppDbContext appDbContext) : base(appDbContext)
        {
        }
    }
}
