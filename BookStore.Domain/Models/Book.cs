using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BookStore.Domain.Models
{
    public class Book : BaseEntity
    {
        //[Required(ErrorMessage = "Nome do livro deve ser informado.")]
        [StringLength(50, ErrorMessage = "O campo Nome permite no máximo 50 caracteres!")]
        public string Title { get; set; }

        [ForeignKey("AuthorId")]
        public virtual Author Author { get; set; }

        [NotMapped]
        public int AuthorId { get; set; }

        [ForeignKey("GenreId")]
        public virtual Genre Genre { get; set; }
        
        [NotMapped]
        public int GenreId { get; set; }

        public int Stock { get; set; }

        public DateTime PublishDate { get; set; }

    }
}
