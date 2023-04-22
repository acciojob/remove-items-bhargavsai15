/*  your css code here. If applicable */
const btn=document.querySelector('form>input');
const selectedItem = document.getElementById('colorSelect');


btn.addEventListener('click', () => {
  const selectedIndex = selectedItem.selectedIndex;
  if (selectedIndex != -1) {
    selectedItem.options[selectedIndex].remove();
  }
})