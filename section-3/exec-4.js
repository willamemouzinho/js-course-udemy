const getHour = () => {
  const date = new Date();
  const hour = date.toLocaleTimeString("pt-BR", {
    hour12: false,
  });

  return hour;
};

const timer = setInterval(() => {
  console.log(getHour())
}, 1000);

setTimeout(() => {
  clearInterval(timer)
}, 5000);