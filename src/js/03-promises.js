import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  //  buttonStart: document.querySelector('button[data-start]'),
};

const { form, delay, step, amount } = refs;

form.addEventListener('submit', promiseGenerator);

function promiseGenerator(e) {
  e.preventDefault();
  let delayValue = Number(delay.value);
  // let stepValue = Number(step.value);
  // let amountValue = Number(amount.value);
  // for (let i = 1; i <= amountValue; i+=1) {
  //   createPromise(i, delayValue)
  //     .then(({ position, delay }) => {
  //       Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //     })
  //     .catch(({ position, delay }) => {
  //       Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  //     });
  //   delayValue += stepValue;
  // }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
