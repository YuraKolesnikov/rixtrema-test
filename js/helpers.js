const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min)

const generateRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(1)

const isANumber = str => (typeof +str == 'number') && !isNaN(+str)