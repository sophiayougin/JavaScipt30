const inputs = document.querySelectorAll('input');
function updateVariable(){
    const suffix = this.dataset.suff || '';
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change',updateVariable));
inputs.forEach(input => input.addEventListener('mousemove',updateVariable));