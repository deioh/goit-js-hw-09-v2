!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')},c=r.delay,u=r.step,a=r.amount;function l(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?i.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):i.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}r.form.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(c.value),t=1;t<=a.value;t++)l(t,n).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=Number(u.value)}))}();
//# sourceMappingURL=03-promises.2e413a6f.js.map