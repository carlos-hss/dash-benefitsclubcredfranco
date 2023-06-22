enum Currency {
  USD = 'en-US',
  BRL = 'pt-BR',
  EUR = 'de-DE',
}

export function formatCurrency(
  value: number,
  currency: keyof typeof Currency,
): string {
  return value.toLocaleString(Currency[currency], {
    style: 'currency',
    currency: currency,
  });
}
