'use strict';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const targetDiv = document.querySelector('#target-div');
const svgElement = document.createElementNS(SVG_NAMESPACE, 'svg');
svgElement.classList.add('svg-wrapper');
targetDiv.appendChild(svgElement);

const appearCircle = (e) => {
  const x = e.offsetX;
  const y = e.offsetY;

  const circleElement = document.createElementNS(SVG_NAMESPACE, 'circle');
  circleElement.setAttribute('cx', `${x}`);
  circleElement.setAttribute('cy', `${y}`);
  circleElement.setAttribute('r', `${10*Math.random()}`);
  circleElement.setAttribute('fill', `rgb(${255*Math.random()
    },${255*Math.random()},${255*Math.random()})`);

  svgElement.appendChild(circleElement);
}

svgElement.addEventListener('mousemove', appearCircle, false);
svgElement.addEventListener('mouseenter', appearCircle, false);
svgElement.addEventListener('mouseleave', appearCircle, false);
svgElement.addEventListener('touchstart', appearCircle, false);
svgElement.addEventListener('touchend', appearCircle, false);
svgElement.addEventListener('touchcancel', appearCircle, false);
svgElement.addEventListener('touchmove', appearCircle, false);
