import"./assets/modulepreload-polyfill-3cfb730f.js";const s=document.querySelector(".feedback-form"),e=s.elements.message,t=s.elements.email,l="feedback-form-state",m=JSON.parse(localStorage.getItem(l));m&&(e.value=m.message||"",t.value=m.email||"");e.addEventListener("input",o=>{const a=JSON.stringify({email:t.value.trim(),message:e.value.trim()});localStorage.setItem(l,a)});t.addEventListener("input",o=>{const a=JSON.stringify({email:t.value.trim(),message:e.value.trim()});localStorage.setItem(l,a)});s.addEventListener("submit",o=>{if(o.preventDefault(),e.value&&t.value){const a={email:t.value,message:e.value};console.log(a),localStorage.removeItem(l),s.reset()}});
//# sourceMappingURL=commonHelpers2.js.map
