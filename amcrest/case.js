const dialog=document.querySelector('#lightbox');
document.documentElement.lang='en';
document.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset.en);
document.querySelectorAll('[data-image]').forEach(el=>el.setAttribute('aria-label','View design: '+el.dataset.captionEn));
document.querySelectorAll('[data-view]').forEach(el=>el.addEventListener('click',()=>{
 document.querySelectorAll('[data-view]').forEach(button=>button.setAttribute('aria-pressed',String(button===el)));
 document.querySelectorAll('#desktop-gallery, #mobile-gallery').forEach(panel=>panel.hidden=panel.id!==el.dataset.view+'-gallery');
}));
document.querySelectorAll('[data-image]').forEach(el=>el.addEventListener('click',()=>{
 const img=document.querySelector('#full-image');img.src=el.dataset.image;img.alt=el.dataset.captionEn;
 document.querySelector('#image-caption').textContent=img.alt;dialog.showModal();document.body.classList.add('dialog-open');document.querySelector('.dialog-content').scrollTop=0;
}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
