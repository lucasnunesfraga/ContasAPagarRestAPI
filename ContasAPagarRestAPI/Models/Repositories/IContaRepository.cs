using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContasAPagarRestAPI.Models.Repositories
{
    public interface IContaRepository
    {
        void Add(Conta conta);
        IEnumerable<Conta> GetAll();
        Conta Find(long key);
        void Remove(long key);
        void Update(Conta item);
    }
}
