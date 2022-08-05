using Microsoft.AspNetCore.Mvc;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FileApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private UploadedFile[] files = new UploadedFile[] {
            new UploadedFile { Id = Guid.NewGuid().ToString(), Filename = "test1.txt" },
            new UploadedFile { Id = Guid.NewGuid().ToString(), Filename = "test2.pdf" },
            new UploadedFile { Id = Guid.NewGuid().ToString(), Filename = "test3.csv" }
        };

        // GET: api/<FilesController>
        [HttpGet]
        public ActionResult<IEnumerable<UploadedFile>> Get()
        {
            return files;
        }

        // GET <FilesController>/5
        [HttpGet("{id}")]
        public ActionResult<UploadedFile> Get(string id)
        {
            if (String.IsNullOrEmpty(id))
            {
                return BadRequest();
            }

            var foundFile = files.FirstOrDefault(f => f.Id == id);

            if(foundFile == null)
            {
                return NotFound();
            }

            return foundFile;
        }

        // POST <FilesController>
        [HttpPost]
        public ActionResult<UploadedFile> Post([FromBody] string filename)
        {
            if (String.IsNullOrEmpty(filename))
            {
                return BadRequest();
            }

            var newFile = new UploadedFile() { Id = Guid.NewGuid().ToString(), Filename = filename };
            this.files.Append<UploadedFile>(newFile);

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

            var storedFile = files.FirstOrDefault(f => f.Id == id);

            bool removed = false;
            
            if(storedFile != null)
            {
                removed = files.ToList().Remove(storedFile);
            }

            return removed ? storedFile : NotFound();
        }
    }
}
