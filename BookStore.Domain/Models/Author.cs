using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BookStore.Domain.Models
{
    public class Author : BaseEntity
    {
        [Required(ErrorMessage = "Nome do autor deve ser informado.")]
        [StringLength(50, ErrorMessage = "O campo Nome permite no máximo 50 caracteres!")]
        public string name { get; set; }
    }
}
