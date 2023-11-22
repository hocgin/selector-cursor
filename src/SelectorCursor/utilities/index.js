export const isFixed = (elem) => {
  do {
    if (window.getComputedStyle(elem).position == 'fixed') return true;
  } while ((elem = elem.offsetParent));
  return false;
};

export const getStyle = (el, name) => {
  if (document.defaultView && document.defaultView.getComputedStyle) {
    name = name.replace(/([A-Z])/g, '-$1');
    name = name.toLowerCase();
    let s = document.defaultView.getComputedStyle(el, '');
    return s && s.getPropertyValue(name);
  }
};
