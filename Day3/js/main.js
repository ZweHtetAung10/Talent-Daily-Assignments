
let faq= document.querySelectorAll('.faq-frame');
for(let i=0; i<faq.length; i++){
    faq[i].querySelector('.faq-bdy').addEventListener('click',function(e){
        e.preventDefault();
        faq[i].classList.toggle('show');

        let show = document.querySelector('.show');
        let p= faq[i].querySelector('.txt');
        if(show){
            p.innerHTML='<p>-</p>';
            console.log('show');
        } else {
            p.innerHTML='<p>+</p>'
            console.log(' not show');

        }
    })
}