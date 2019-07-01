using BookStore.Domain.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookStore.Service.Validators
{
   public class GenreValidator : AbstractValidator<Genre>
    {
        public GenreValidator()
        {
            RuleFor(c => c)
                    .NotNull()
                    .OnAnyFailure(x =>
                    {
                        throw new ArgumentNullException("Can't found the object.");
                    });

            RuleFor(c => c.name)
                .NotEmpty().WithMessage("É necessario informar um nome para o genero.")
                .NotNull().WithMessage("É necessario informar um nome para o genero.");
        }
    }
}
