using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Domain.Interfaces;
using BookStore.Domain.Models;
using BookStore.Infra.Context;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Infra.Repository
{

    public class BookRepository : IBookRepository

    {
        public readonly BookStoreContext _context;

        public BookRepository(BookStoreContext context)
        {
            _context = context;
        }

        public void Insert(Book obj)
        {
            _context.Set<Book>().Add(obj);
            _context.SaveChanges();
        }

        public void Update(Book obj)
        {
            _context.Entry(obj).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public IQueryable<Book> Select()
        {
            return _context.Books
                .Include(x => x.Author)
                .Include(x => x.Genre)
                .AsNoTracking();
        }

        public Book Select(int id)
        {
            return _context.Books
                .Include(x => x.Author)
                .Include(x => x.Genre)
                .FirstOrDefault(x => x.Id == id);
        }

        public void Remove(int id)
        {
            //Book book = _context.Books.Find(id);
            //_context.Books.Remove(book);

            _context.Set<Book>().Remove(Select(id));
            _context.SaveChanges();
        }

        public IList<Book> SelectAll()
        {
            throw new NotImplementedException();
        }
    }
}
