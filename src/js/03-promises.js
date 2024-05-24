import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

const { form, delay, step, amount } = refs;

form.addEventListener('submit', promiseGenerator);

function promiseGenerator(e) {
  e.preventDefault();
  let delayValue = Number(delay.value);
  // let stepValue = Number(step.value);
  // let amountValue = Number(amount.value);
  for (let positionValue = 1; positionValue <= amount.value; positionValue++) {
    createPromise(positionValue, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  delayValue += Number(step.value);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);

    //   if (shouldResolve) {
    //     // Fulfill
    //   } else {
    //     // Reject
    //   }
  });
}
