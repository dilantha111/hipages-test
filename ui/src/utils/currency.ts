const formatToUSD = (price: number) => {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export { formatToUSD };
