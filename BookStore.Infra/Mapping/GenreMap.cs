using BookStore.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookStore.Infra.Mapping
{
    public class GenreMap : IEntityTypeConfiguration<Genre>
    {
        public void Configure(EntityTypeBuilder<Genre> builder)
        {
            builder.ToTable("genre");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.name)
                .IsRequired()
                .HasColumnName("name");
        }

       
    }
}
