export const formatPrice = (price) =>
  new Intl.NumberFormat("ru-RU").format(price) + " ₽";
