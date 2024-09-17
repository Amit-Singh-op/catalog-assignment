export const timeRanges = {
  "1d": 1,
  "3d": 3,
  "1w": 7,
  "1m": 30,
  "6m": 180,
  "1y": 365,
  max: 1095, // 3 years
};

export const generateData = (days) => {
  const data = [];
  let price = 63179.71;
  for (let i = days; i >= 0; i--) {
    const getRandom = Math.random() * 1000;
    price += Math.random() * 1000 - 500;
    data.push({
      price: Math.max(0, price),
      volume: getRandom,
    });
  }
  return data;
};

export const updateData = (curValue, curVolume) => {
  const getRandomValue = Math.floor(Math.random() * 201) - 100;
  const getRandomVolume = Math.floor(Math.random() * 201) - 100;

  return {
    curVolume: curVolume + getRandomValue,
    curValue: curValue + getRandomVolume,
  };
};
