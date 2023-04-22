/*  your css code here. If applicable */
const btn=document.querySelector('form>input');
const selectedItem = document.getElementById('colorSelect');
const selectedIndex = selectedItem.selectedIndex;

btn.addEventListener('click', () => {
  if (selectedIndex != -1) {
    selectedItem.options[selectedIndex].remove();
  }
})