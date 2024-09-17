export const generateCompareData = (days, price = 1000) => {
  const data = [];
  for (let i = days; i >= 0; i--) {
    price += Math.random() * 100 - 50;
    const getRandom = Math.random() * 1000;
    data.push({
      price: Math.max(0, price),
      volume: getRandom,
    });
  }
  return data;
};
