using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContasAPagarRestAPI.Models.Repositories
{
    public class ContaRepository : IContaRepository
    {
        private readonly ContaContext _context;
        public ContaRepository(ContaContext context)
        {
            _context = context;
        }
        public IEnumerable<Conta> GetAll()
        {
            return _context.Contas.ToList();
        }
        public void Add(Conta item)
        {
            _context.Contas.Add(item);
            _context.SaveChanges();
        }
        public Conta Find(long key)
        {
            return _context.Contas.FirstOrDefault(t => t.Id == key);
        }
        public void Remove(long key)
        {
            var entity = _context.Contas.First(t => t.Id == key);
            _context.Contas.Remove(entity);
            _context.SaveChanges();
        }
        public void Update(Conta conta)
        {
            _context.Contas.Update(conta);
            _context.SaveChanges();
        }
    }
}
