const ironManImage = document.getElementById('iron-man');

ironManImage.addEventListener('mouseover', function() {

    ironManImage.style.transform = 'scale(1.1)';
    ironManImage.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
});

ironManImage.addEventListener('mouseout', function() {
    ironManImage.style.transform = 'scale(1)';
    ironManImage.style.boxShadow = 'none';
});

const button = document.getElementById('myButton');

function changeText() {
  button.textContent = 'Clicked!';
}

button.addEventListener('click', changeText);
function changeText() {
    button.textContent = 'Clicked!';
    button.style.backgroundColor = 'yellow';
  }
  
  button.addEventListener('click', changeText);
  