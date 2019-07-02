using BookStore.Domain.Interfaces;
using BookStore.Domain.Models;
using BookStore.Infra.Context;
using BookStore.Infra.Repository;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BookStore.Service.Services
{
    public class BookService : IBookService
    {
        private BookRepository _repository;
      
        public BookService(BookStoreContext context)
        {
            _repository = new BookRepository(context);
        }

        public Book Post<V>(Book obj) where V : AbstractValidator<Book>
        {
            Validate(obj, Activator.CreateInstance<V>());

            _repository.Insert(obj);
            return obj;
        }

        public Book Put<V>(Book obj, int id) where V : AbstractValidator<Book>
        {
            obj.Id = id;
            Validate(obj, Activator.CreateInstance<V>());

            _repository.Update(obj);
            return obj;
        }

        public void Delete(int id)
        {
            if (id == 0)
                throw new ArgumentException("O Id não pode ser 0.");

            _repository.Remove(id);
        }

        public IQueryable<Book> Get() => _repository.Select();

        public Book Get(int id)
        {
            if (id == 0)
                throw new ArgumentException("O Id não pode ser "+ id);

            _repository.Select(id);
            return _repository.Select(id);
        }

        private void Validate(Book obj, AbstractValidator<Book> validator)
        {
            if (obj == null)
                throw new Exception("Registros não detectados!");

            validator.ValidateAndThrow(obj);
        }

    }
}
