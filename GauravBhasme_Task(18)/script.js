const username=document.getElementById('username');
const box=document.querySelector('.box');
document.getElementById('greetBtn').addEventListener('click',()=>{
  const value=document.getElementById('search').value;
  username.textContent=value;
  document.getElementById('search').value=''
})

const boxes = document.querySelector('.boxes');

boxes.addEventListener('click', (e) => {
  if (e.target.classList.contains('box')) {
    const color = e.target.id;

    e.target.style.backgroundColor = color;
    e.target.style.color = 'white';
  }
});
