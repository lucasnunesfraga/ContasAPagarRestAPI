using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContasAPagarRestAPI.Models;
using ContasAPagarRestAPI.Models.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace ContasAPagarRestAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContaController : Controller
    {
        private readonly IContaRepository _contaRepository;
        public ContaController(IContaRepository contaRepository)
        {
            _contaRepository = contaRepository;
        }

        [HttpGet]
        public IEnumerable<Conta> GetAll()
        {
            return _contaRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetById")]
        public IActionResult GetById(long id)
        {
            var item = _contaRepository.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Conta conta)
        {
            if(ModelState.IsValid)
            {
                _contaRepository.Add(conta.ValidaAtrasoAtualizaConta(conta));

                return CreatedAtRoute("GetById", new { id = conta.Id }, conta);
            }

            return BadRequest();
        }
    }
}
