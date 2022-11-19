using ShopApp.Application.Interfaces;
using ShopApp.Application.Services;
using ShopApp.Domain.Interfaces.Repositories;
using ShopApp.Infrastructure.Repositories;

namespace ShopApp.Api.Extensions
{
    public static class ModuleCollectionExtensionCustomer
    {
        public static IServiceCollection AddCoreModulesCustomer(this IServiceCollection services)
        {
            // Services / Use Cases
            services.AddScoped<ICustomerService, CustomerService>();

            return services;
        }

        public static IServiceCollection AddInfrastructureModulesCustomer(this IServiceCollection services)
        {
            // Repositories
            services.AddScoped<ICustomerRepository, CustomerRepository>();


            return services;
        }
    }
}