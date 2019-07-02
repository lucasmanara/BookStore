using BookStore.Domain.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BookStore.Domain.Interfaces
{
    public interface IBookService
    {
        Book Post<V>(Book obj) where V : AbstractValidator<Book>;

        Book Put<V>(Book obj, int id) where V : AbstractValidator<Book>;

        void Delete(int id);

        Book Get(int id);

        IQueryable<Book> Get();
    }
}
