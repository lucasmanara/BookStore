using BookStore.Domain.Models;
using BookStore.Infra.Mapping;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BookStore.Infra.Context
{
    public class BookStoreContext : DbContext
    {
        

        public BookStoreContext(DbContextOptions<BookStoreContext> options)
            : base(options)
        {
        }

        public DbSet<Author> Authors { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Book> Books { get; set; }



        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Book>(new BookMap().Configure);
            builder.Entity<Genre>(new GenreMap().Configure);
            builder.Entity<Author>(new AuthorMap().Configure);
            base.OnModelCreating(builder);

        }

    }
}
