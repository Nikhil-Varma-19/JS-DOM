const accd= document.getElementsByClassName('content');
for(i=0;i<accd.length;i++){
    accd[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
}