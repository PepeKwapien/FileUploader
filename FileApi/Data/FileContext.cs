using Microsoft.EntityFrameworkCore;

namespace FileApi.Data
{
    public class FileContext : DbContext
    {
        public FileContext(DbContextOptions options) : base(options) { }

        DbSet<UploadedFile> uploadedFiles { get; set; }
    }
}
