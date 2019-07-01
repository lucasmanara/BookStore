using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Domain.Models;
using BookStore.Infra.Context;
using BookStore.Service.Services;
using BookStore.Service.Validators;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private BaseService<Book> _service;
        private BaseService<Genre> _serviceGenre;
        private BaseService<Author> _serviceAuthor;

        public BookController(BookStoreContext context)
        {
            _service        = new BaseService<Book>(context);
            _serviceGenre   = new BaseService<Genre>(context);
            _serviceAuthor  = new BaseService<Author>(context);
        }
        // POST: api/Books
        [HttpPost]
        public IActionResult Post([FromBody] Book item)
        {
            try
            {
                Genre genre = _serviceGenre.Get(item.GenreId);
                item.Genre = genre;

                Author author = _serviceAuthor.Get(item.AuthorId);
                item.Author = author;
                //.find.FirstOrDefault(x => x.Id == livro.GeneroId);

                _service.Post<BookValidator>(item);

                return new ObjectResult(item.Id);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
}
        }

        // PUT: api/Books/5
        [HttpPut("{id}")]
        public IActionResult Put([FromBody] Book item, int id)
        {
            try
            {
                _service.Put<BookValidator>(item, id);

                return new ObjectResult(item);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _service.Delete(id);
                return new NoContentResult();
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // GET: api/Books/1
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var listOfObj = _service.Get();

                foreach(var obj in listOfObj)
                {
                    obj.Genre = _serviceGenre.Get(obj.GenreId);
                    obj.Author = _serviceAuthor.Get(obj.AuthorId);
                }
                
                return new ObjectResult(_service.Get());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // GET: api/Books/1
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var obj = _service.Get(id);
                obj.Genre = _serviceGenre.Get(obj.GenreId);
                obj.Author = _serviceAuthor.Get(obj.AuthorId);

                return new ObjectResult(obj);
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}