using BookStore.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookStore.Infra.Mapping
{
    public class AuthorMap : IEntityTypeConfiguration<Author>
    {
        public void Configure(EntityTypeBuilder<Author> builder)
        {
            builder.ToTable("author");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.name)
                .IsRequired()
                .HasColumnName("name");
        }

       
    }
}
