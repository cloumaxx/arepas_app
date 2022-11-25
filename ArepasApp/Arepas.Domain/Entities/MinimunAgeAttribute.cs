using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arepas.Domain.Entities
{
    public class MinimunAgeAttribute : ValidationAttribute
    {
        int _minimunmAge;

        public MinimunAgeAttribute(int minimunmAge)
        {
            _minimunmAge = minimunmAge;
        }

        public override bool IsValid(object value)
        {
            DateTime date;
            if (DateTime.TryParse(value.ToString(),out date))
            {

                return date.AddYears(_minimunmAge) < DateTime.Now;

            }
            return false;
        }
    }
}
