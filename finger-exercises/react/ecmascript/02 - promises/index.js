// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    if (time > 1000) {
      reject(new Error('This time is too much !'));
    }
    const delayedFunction = () => resolve(Date.now() - start);
    setTimeout(delayedFunction, time);
  });
}

export async function asyncDelay(time) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    if (time > 1000) {
      reject(new Error('This time is too much !'));
    }
    const delayedFunction = () => resolve(Date.now() - start);
    setTimeout(delayedFunction, time);
  });
}
