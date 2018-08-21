window.onload = function(){
  closeOldDocRefBtn = document.getElementById('docs-alert-remove');
  closeOldDocRefBtn.addEventListener('click',function(){
    var target = document.getElementById('old-docs-alert').style.display = 'none';
  })
}
