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
    public class BaseService<T> : IService<T> where T : BaseEntity
    {
        public BaseRepository<T> _repository;
      
        public BaseService(BookStoreContext context)
        {
            _repository = new BaseRepository<T>(context);
        }

        public T Post<V>(T obj) where V : AbstractValidator<T>
        {
            Validate(obj, Activator.CreateInstance<V>());

            //_repository._context.ChangeTracker.TrackGraph(obj, e =>
            //{
            //    e.Entry.State = EntityState.Unchanged;

            //    if ((e.Entry.Entity as T) == null) return;

            //    _repository._context.Entry((T)e.Entry.Entity).Property("GenreId").IsModified = false;
            //});

            _repository.Insert(obj);
            return obj;
        }

        public T Put<V>(T obj, int id) where V : AbstractValidator<T>
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

        public IList<T> Get() => _repository.Select();

        public T Get(int id)
        {
            if (id == 0)
                throw new ArgumentException("O Id não pode ser "+ id);

            _repository.Select(id);
            return _repository.Select(id);
        }

        private void Validate(T obj, AbstractValidator<T> validator)
        {
            if (obj == null)
                throw new Exception("Registros não detectados!");

            validator.ValidateAndThrow(obj);
        }

    }
}
