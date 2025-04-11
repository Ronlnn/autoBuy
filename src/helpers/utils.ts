export const formatPrice = (price: number): string => {
  return (
    new Intl.NumberFormat('ru-RU', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(price) + ' ₽'
  );
};

export const formatKilometer = (km: number): string => {
  return (
    new Intl.NumberFormat('ru-RU', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(km) + ' км'
  );
};
