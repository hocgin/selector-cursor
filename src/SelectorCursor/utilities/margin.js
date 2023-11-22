import { getStyle } from '../utilities/';

export function createMarginVisual(el, hover = false) {
  const bounds = el.getBoundingClientRect();
  const calculatedStyle = getStyle(el, 'margin');
  const boxdisplay = document.createElement('visbug-boxmodel');

  if (calculatedStyle !== '0px') {
    const sides = {
      top: getStyle(el, 'marginTop'),
      right: getStyle(el, 'marginRight'),
      bottom: getStyle(el, 'marginBottom'),
      left: getStyle(el, 'marginLeft'),
    };

    Object.entries(sides).forEach(([side, val]) => {
      if (typeof val !== 'number')
        val = parseInt(getStyle(el, 'margin' + '-' + side).slice(0, -2));

      sides[side] = Math.round(val.toFixed(1) * 100) / 100;
    });

    boxdisplay.position = {
      mode: 'margin',
      color: hover ? 'purple' : 'pink',
      bounds,
      sides,
    };
  }

  return boxdisplay;
}
