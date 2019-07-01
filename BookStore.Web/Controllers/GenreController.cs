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
    public class GenreController : ControllerBase
    {
        private BaseService<Genre> _service;
        //private BaseService<Genre> _serviceGenre;

        public GenreController(BookStoreContext context)
        {
            _service = new BaseService<Genre>(context);
            //_serviceGenre = new BaseService<Genre>(context);
        }
        // POST: api/Books
        [HttpPost]
        public IActionResult Post([FromBody] Genre item)
        {
            try
            {

                //Genre genre = _serviceGenre.Get(item.IdGenre);
                    //.find.FirstOrDefault(x => x.Id == livro.GeneroId);
            
            _service.Post<GenreValidator>(item);

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
        public IActionResult Put([FromBody] Genre item, int id)
        {
            try
            {
                _service.Put<GenreValidator>(item, id);

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