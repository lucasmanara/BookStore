using BookStore.Domain.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookStore.Domain.Interfaces
{
    public interface IService<T> where T : BaseEntity
    {
        T Post<V>(T obj) where V : AbstractValidator<T>;

        T Put<V>(T obj, int id) where V : AbstractValidator<T>;

        void Delete(int id);

        T Get(int id);

        IList<T> Get();
    }
}
