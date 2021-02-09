using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContasAPagarRestAPI.Models
{
    public class Conta
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Digite o nome")]
        public string Nome { get; set; }

        [Range(0.1, 9999999999999999.99, ErrorMessage = "Valor Original incorreto!")]
        public decimal ValorOriginal { get; set; }

        [Range(typeof(DateTime), "01/01/1900", "01/01/2100", ErrorMessage = "Data de vencimento incorreta!")]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime DataVencimento { get; set; }

        [Range(typeof(DateTime), "01/01/1900", "01/01/2100", ErrorMessage = "Data de pagamento incorreta!")]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime DataPagamento { get; set; }
        
        public decimal ValorCorrigido { get; set; }
        public int QuantidadeDiasAtraso { get; set; }
        

        public Conta ValidaAtrasoAtualizaConta(Conta conta)
        {
            //conta.DataVencimento = conta.DataVencimento.DayOfWeek == DayOfWeek.Saturday ? conta.DataVencimento.AddDays(2) : conta.DataVencimento;
            //conta.DataVencimento = conta.DataVencimento.DayOfWeek == DayOfWeek.Sunday ? conta.DataVencimento.AddDays(1) : conta.DataVencimento;

            var diasAtraso = Convert.ToInt32((conta.DataPagamento - conta.DataVencimento).TotalDays);

            if(diasAtraso > 0)
            {
                if (diasAtraso <= 3)
                {
                    var multa = ValorOriginal * (Convert.ToDecimal(2)/100);
                    var juros = (ValorOriginal + multa) * (Convert.ToDecimal(0.1)/100) * diasAtraso;

                    conta.ValorCorrigido = Math.Round((ValorOriginal + multa) + juros,2);
                }

                if(diasAtraso > 3 && diasAtraso <= 5)
                {
                    var multa = ValorOriginal * (Convert.ToDecimal(3)/100);
                    var juros = (ValorOriginal + multa) * (Convert.ToDecimal(0.2)/100) * diasAtraso;

                    conta.ValorCorrigido = Math.Round((ValorOriginal + multa) + juros, 2);
                }

                if (diasAtraso > 5)
                {
                    var multa = ValorOriginal * (Convert.ToDecimal(5)/100);
                    var juros = (ValorOriginal + multa) * (Convert.ToDecimal(0.3)/100) * diasAtraso;

                    conta.ValorCorrigido = Math.Round((ValorOriginal + multa) + juros, 2);
                }

                conta.QuantidadeDiasAtraso = diasAtraso;
            }
            

            return conta;
        }
    }
}
