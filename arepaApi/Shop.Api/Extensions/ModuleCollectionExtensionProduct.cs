using ShopApp.Application.Services;
using ShopApp.Application.Interfaces;
using ShopApp.Domain.Interfaces.Repositories;
using ShopApp.Infrastructure.Repositories;

namespace Shop.Api.Extensions
{
    public static class ModuleCollectionExtensionProduct
    {
        public static IServiceCollection AddCoreModulesProduct(this IServiceCollection services)
        {
            // Services / Use Cases
            //services.AddScoped<ShopApp.Application.Interfaces.IProductService,ProductService>();
            services.AddScoped<IProductService, ProductService>();
            return services;
        }
        public static IServiceCollection AddInfrastructureModulesProduct(this IServiceCollection services)
        {
            // Repositories
            services.AddScoped<IProductRepository, ProductRepository>();


            return services;
        }
    }
}
