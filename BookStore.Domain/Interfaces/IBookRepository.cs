using BookStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.Domain.Interfaces
{
    public interface IBookRepository
    {
        void Insert(Book obj);

        void Update(Book obj);

        void Remove(int id);

        Book Select(int id);

        IList<Book> SelectAll();
    }
}
