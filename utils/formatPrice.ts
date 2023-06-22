export const formatPrice = (value: string) => {
  const numericValue = value.replace(/[^\d]/g, '');

  const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedValue;
};