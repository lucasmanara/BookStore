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

    public class BaseRepository<T> : IRepository<T> where T : BaseEntity

    {
        public readonly BookStoreContext _context;

        public BaseRepository(BookStoreContext context)
        {
            _context = context;
        }

        public void Insert(T obj)
        {
            _context.Set<T>().Add(obj);
            _context.SaveChanges();
        }

        public void Update(T obj)
        {
            _context.Entry(obj).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public IList<T> Select()
        {
            return _context.Set<T>().ToList();
        }

        public T Select(int id)
        {
            return _context.Set<T>().Find(id);
        }

        public void Remove(int id)
        {
            _context.Set<T>().Remove(Select(id));
            _context.SaveChanges();
        }

    }
}
