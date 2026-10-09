document.addEventListener('DOMContentLoaded',function(){
  var input=document.getElementById('q');
  if(!input) return;
  input.addEventListener('input',function(){
    var kw=input.value.trim().toLowerCase();
    document.querySelectorAll('ul.archive li').forEach(function(li){
      li.style.display = !kw || li.textContent.toLowerCase().includes(kw) ? '' : 'none';
    });
  });
});
