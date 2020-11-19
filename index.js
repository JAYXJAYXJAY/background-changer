const button = document.querySelector('button');
const h2element = document.querySelector('h2');
const bgelement = document.querySelector('section');

button.addEventListener('click', () => {
  let color = '#';
  const random = Math.random().toString(16).slice(2,8);
  color += random;
  bgelement.style.backgroundColor = color;
  h2element.innerText = color;

  console.log(color);

})