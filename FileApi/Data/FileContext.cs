using Microsoft.EntityFrameworkCore;

namespace FileApi.Data
{
    public class FileContext : DbContext
    {
        public FileContext(DbContextOptions options) : base(options) { }

        public DbSet<UploadedFile> uploadedFiles { get; set; }

        public DbSet<UploadedFile> getAllFiles()
        {
            return this.uploadedFiles;
        }
    }
}
