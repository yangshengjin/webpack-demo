
import { cube } from './math.js'
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
function component() {
  var element = document.createElement('pre');
  element.innerHTML = [
    'hello webpack',
    '4 cubed is equal to ' + cube(4)
  ].join('\n\n');
  return element;
}

document.body.appendChild(component());