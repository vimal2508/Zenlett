document.getElementById('year')?.replaceChildren(String(new Date().getFullYear()));
document.querySelectorAll('.demo-form').forEach(form=>form.addEventListener('submit',e=>{
 e.preventDefault(); const status=form.querySelector('.status');
 const a=form.querySelector('#pw'),b=form.querySelector('#pw2');
 if(a&&b&&a.value!==b.value){status.textContent='Passwords do not match.';return;}
 if(status)status.textContent='Front-end demo only. Form submission is not connected yet.';
}));
