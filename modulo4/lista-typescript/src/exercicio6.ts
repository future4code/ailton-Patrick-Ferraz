
type Conta = {
    cliente: string;
    saldoTotal: number;
    debitos: number[];
  };
  
  const clientes: Conta[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] },
  ];
  
  function getContasNegativas(contas: Conta[]): Conta[] {
    let saldoComDebitos = contas.map((conta) => {
      conta.saldoTotal -= conta.debitos.reduce(
        (acumulador, debito) => acumulador + debito,
        0
      );
      return conta;
    });
    return saldoComDebitos.filter((conta) => conta.saldoTotal < 0);
  }
  
  console.log(getContasNegativas(clientes));