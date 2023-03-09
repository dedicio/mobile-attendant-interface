function formatCurrency(value: number): string {
  const options = {
    style: 'currency',
    currency: 'BRL',
  };
  return new Intl.NumberFormat('pt-BR', options).format(value);
}

export default {
  formatCurrency,
}