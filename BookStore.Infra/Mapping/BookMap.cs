using BookStore.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookStore.Infra.Mapping
{
    public class BookMap : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder.ToTable("book");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.Title)
                .IsRequired()
                .HasColumnName("title");

            builder.Property(c => c.AuthorId)
                .IsRequired()
                .HasColumnName("authorid");

            builder.Property(c => c.GenreId)
                .IsRequired()
                .HasColumnName("genreid");

            builder.Property(c => c.Stock)
                .IsRequired()
                .HasColumnName("stock");

            builder.Property(c => c.PublishDate)
                .HasColumnName("publishdate");
        }

       
    }
}
