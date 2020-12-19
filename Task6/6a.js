
const swp = document.getElementById('btnswop');
const cnvrt = document.getElementById('btnconvert');
const from = document.getElementById('from');
const to = document.getElementById('to');
const fromLabel = document.getElementById('from-label');
const toLabel = document.getElementById('to-label');

function swop(){

var temp = fromLabel.textContent;
fromLabel.textContent = toLabel.textContent;
toLabel.textContent =  temp;
tmp = from.name;
from.name=to.name;
to.name = from.name;
tmp = from.value;
from.value=to.value;
to.value = tmp;

}
function convert () {
  if (from.value === '') { from.value = 0 }
  to.value = from.name === 'celsius' ? fToC(from.value) : cToF(from.value)
}
swp.addEventListener('click',() => {
  swop();
});

cnvrt.addEventListener('click',() => {
  convert();
});


function cToF(celsius)
{
  return Math.round(celsius* 9 / 5 + 32);
}

function fToC(fahrenheit)
{
  return Math.round(fahrenheit* 9 / 5 + 32);
}
