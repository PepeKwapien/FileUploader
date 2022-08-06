using System.ComponentModel.DataAnnotations;

namespace FileApi
{
    public class UploadedFile
    {
        [Key]
        public string? Id { get; set; }

        [Required]
        public string? Filename { get; set; }
    }
}
