using System;
using System.Collections.Generic;
using EnglishAssistentBackend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace EnglishAssistentBackend.Context;

public partial class EnglishAssistentContext : DbContext
{
    public EnglishAssistentContext()
    {
    }

    public EnglishAssistentContext(DbContextOptions<EnglishAssistentContext> options)
        : base(options)
    {
    }

    public virtual DbSet<JargonDictionary> JargonDictionaries { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS; Database=EnglishAssistent; Trusted_Connection=True; TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<JargonDictionary>(entity =>
        {
            entity.ToTable("JargonDictionary");

            entity.Property(e => e.ExampleOfUse).HasColumnType("text");
            entity.Property(e => e.Jargon)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.Translate)
                .HasMaxLength(256)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
