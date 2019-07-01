using BookStore.Domain.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookStore.Service.Validators
{
   public class BookValidator : AbstractValidator<Book>
    {
        public BookValidator()
        {
            RuleFor(c => c)
                    .NotNull()
                    .OnAnyFailure(x =>
                    {
                        throw new ArgumentNullException("Can't found the object.");
                    });

            RuleFor(c => c.Title)
                .NotEmpty().WithMessage("É necessario informar um titulo para o livro.")
                .NotNull().WithMessage("É necessario informar um titulo para o livro.");

            RuleFor(c => c.Genre)
                .NotEmpty().WithMessage("É necessario informar um Genero para o livro.")
                .NotNull().WithMessage("É necessario informar um Genero para o livro.");

            RuleFor(c => c.Author)
                .NotEmpty().WithMessage("É necessario informar um Autor para o livro.")
                .NotNull().WithMessage("É necessario informar um Autor para o livro.");

            RuleFor(c => c.PublishDate)
                .NotEmpty().WithMessage("É necessario informar uma data de publicação para o livro.")
                .NotNull().WithMessage("É necessario informar uma data de publicação para o livro.");

        }
    }
}
