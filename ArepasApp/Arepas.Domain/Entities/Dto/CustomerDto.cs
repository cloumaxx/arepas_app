﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arepas.Domain.Entities.Dto
{
    public class CustomerDto
    {
        public int Id { get; set; }

        [Required(ErrorMessage ="El Email es requerido")]
        [StringLength(50 ,ErrorMessage ="La Cantidad maxima son 50 caracteres")]
        public string? Email { get; set; }
        
        [Required(ErrorMessage ="La contraseña es requerida")]
        [StringLength(50 ,ErrorMessage = "La Cantidad maxima son 50 caracteres")]
        public string? Password { get; set; }

        [StringLength(50, ErrorMessage = "La Cantidad maxima son 50 caracteres")]
        public string? FirstName { get; set; }

        [StringLength(50, ErrorMessage = "La Cantidad maxima son 50 caracteres")]
        public string? LastName { get; set; }

        [StringLength(50, ErrorMessage = "La Cantidad maxima son 50 caracteres")]
        public DateTime? BirthOfDate { get; set; }

        [Required]
        public DateTime? RegisterDate { get; set; } = DateTime.Now;

        [StringLength(255, ErrorMessage = "La Cantidad maxima son 255 caracteres")]
        public string? Address { get; set; }

        [StringLength(50, ErrorMessage = "La Cantidad maxima son 50 caracteres")] 
        public string? PhoneNumber { get; set; }
    }
}
