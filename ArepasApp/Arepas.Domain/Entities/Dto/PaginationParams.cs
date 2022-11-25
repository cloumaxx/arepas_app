using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arepas.Domain.Entities.Dto
{
    public class PaginationParams
    {
        private const int _maxItemsPerPage = 20;
        private int itemsPerPage;

        [BindRequired]
        public int Page { get; set; } = 1;

        [BindRequired]
        public int Limit
        {
            get => itemsPerPage;
            set => itemsPerPage = value > _maxItemsPerPage ? _maxItemsPerPage : value;
        }
    }
}
