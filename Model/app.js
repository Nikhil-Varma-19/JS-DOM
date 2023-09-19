let openbtn = document.getElementById('open-model');
let modelContain=document.getElementById('model-container');
let closebtn= document.getElementById('close-btn');

openbtn.addEventListener('click',function(){

    modelContain.style.display='block';
})
closebtn.addEventListener('click',function(){

    modelContain.style.display='none';
})
window.addEventListener('click',function(e){
    if(e.target===modelContain){
        modelContain.style.display='none';
    }
});