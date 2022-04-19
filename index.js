'use strict';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const targetDiv = document.querySelector('#target-div');
const svgElement = document.createElementNS(SVG_NAMESPACE, 'svg');
svgElement.classList.add('svg-wrapper');
targetDiv.appendChild(svgElement);

const appearArrow = (e) => {
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

svgElement.addEventListener('mousemove', appearArrow, false);
svgElement.addEventListener('mouseenter', appearArrow, false);
svgElement.addEventListener('mouseleave', appearArrow, false);
svgElement.addEventListener('touchstart', appearArrow, false);
svgElement.addEventListener('touchend', appearArrow, false);
svgElement.addEventListener('touchcancel', appearArrow, false);
svgElement.addEventListener('touchmove', appearArrow, false);
