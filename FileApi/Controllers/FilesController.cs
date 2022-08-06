using FileApi.Data;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FileApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private FileContext _dbContext;

        public FilesController(FileContext dbContext)
        {
            this._dbContext = dbContext;
        }

        // GET: api/<FilesController>
        [HttpGet]
        public ActionResult<IEnumerable<UploadedFile>> Get()
        {
            return this._dbContext.getAllFiles();
        }

        // GET <FilesController>/5
        [HttpGet("{id}")]
        public ActionResult<UploadedFile> Get(string id)
        {
            if (String.IsNullOrEmpty(id))
            {
                return BadRequest();
            }

            var foundFile = this._dbContext.uploadedFiles.FirstOrDefault(f => f.Id == id);

            if(foundFile == null)
            {
                return NotFound();
            }

            return foundFile;
        }

        // POST <FilesController>
        [HttpPost]
        public ActionResult<UploadedFile> Post([FromBody] UploadedFile file)
        {
            if (file == null || String.IsNullOrEmpty(file.Filename))
            {
                return BadRequest();
            }

            System.Diagnostics.Debug.WriteLine("Creating file");

            var newFile = new UploadedFile() { Id = Guid.NewGuid().ToString(), Filename = file.Filename };
            this._dbContext.uploadedFiles.Add(newFile);
            this._dbContext.SaveChanges();

            return newFile;

        }

        // PUT api/<FilesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value) 
        {
            throw new NotImplementedException();
        }

        // DELETE api/<FilesController>/5
        [HttpDelete("{id}")]
        public ActionResult<UploadedFile> Delete(string id)
        {
            if (String.IsNullOrEmpty(id))
            {
                return BadRequest();
            }

            var storedFile = this._dbContext.uploadedFiles.FirstOrDefault(f => id.Equals(f.Id));

            bool removed = false;
            
            if(storedFile != null)
            {
                this._dbContext.uploadedFiles.Remove(storedFile);
                removed = true;
                this._dbContext.SaveChanges();
            }

            return removed ? storedFile : NotFound();
        }
    }
}
