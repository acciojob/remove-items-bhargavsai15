/*  your css code here. If applicable */
const btn=document.querySelector('form>input');
const selectedItem = document.getElementById('colorSelect');

btn.addEventListener('click', () => {
  let index = 0;
  selectedItem.childNodes.forEach(item => {
    if (item.value == selectedItem.value) {
      item.style.display = 'none';
    }
  })
  
  for (let i = 0; i < selectedItem.length; i++){
    if (selectedItem[i].style.display != 'none') {
      selectedItem.selectedIndex = index;
      return;
    } else {
      index++;
    }
  }

  selectedItem.selectedIndex = -1;
})