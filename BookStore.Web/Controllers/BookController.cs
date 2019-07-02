using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStore.Domain.Interfaces;
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
        private readonly IBookService _service;
        private readonly IService<Genre> _serviceGenre;
        private readonly IService<Author> _serviceAuthor;

        public BookController(IBookService service,
            IService<Genre> serviceGenre,
            IService<Author> serviceAuthor)
        {
            _service        = service;
            _serviceGenre   = serviceGenre;
            _serviceAuthor  = serviceAuthor;
        }
        // POST: api/Books
        [HttpPost]
        public IActionResult Post([FromBody] Book item)
        {
            try
            {
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
                
                return new ObjectResult(_service.Get().ToList());
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
                return new ObjectResult(_service.Get(id));
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