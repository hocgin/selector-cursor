const variables = `
:host {
  --theme-bg: hsl(0 0% 100%);
  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));
  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));
  --theme-bd-opacity: 1;
  --theme-bd-2-opacity: 1;
  --theme-color: hotpink;
  --theme-blue: hsl(188 90% 45%);
  --theme-purple: hsl(267 100% 58%);

  --theme-text_color: hsl(0 0% 10%);
  --theme-icon_color: hsl(0 0% 20%);
  --theme-icon_hover-bg: hsl(0 0% 95%);
  --theme-icon_active-bg: hsl(0 0% 90%);

  --layer-top: 2147483647;
  --layer-1: 2147483646;
  --layer-2: 2147483645;
  --layer-3: 2147483644;
  --layer-4: 2147483643;
  --layer-5: 2147483642;

  --text-shadow: 0 1px hsl(0 0% 0% / 40%);

  @media (-webkit-min-device-pixel-ratio: 2) {
    --text-shadow: 0 .5px hsl(0 0% 0% / 50%);
  }

  @media (prefers-color-scheme: dark) {
    --theme-bg: hsl(0 0% 10%);
    --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));
    --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));
    --theme-color: hsl(330deg 65% 75%);
    --theme-text_color: hsl(0 0% 90%);
    --theme-icon_color: hsl(0 0% 80%);
    --theme-icon_hover-bg: hsl(0 0% 15%);
    --theme-icon_active-bg: hsl(0 0% 20%);
  }

  @supports (backdrop-filter: blur(5px)) {
    --theme-bd-opacity: .8;
    --theme-bd-2-opacity: .9;
  }

  @supports (-webkit-backdrop-filter: blur(5px)) {
    --theme-bd-opacity: .8;
    --theme-bd-2-opacity: .9;
  }
}
`;
const constructStylesheet = (styles, stylesheet = new CSSStyleSheet()) => {
  stylesheet.replaceSync(styles);
  return stylesheet;
};

export const HandlesStyles = constructStylesheet(`
${variables}

:host {
    position: var(--position, 'absolute');
    top: var(--top);
    left: var(--left);
    overflow: visible;
    pointer-events: none;
    z-index: var(--layer-3);
    width: var(--width);
    height: var(--height);
    display: grid;
    grid-template-rows: 1fr;
    isolation: isolate;
}

:host > svg {
    position: absolute;
}
`);
export const HandleStyles = constructStylesheet(`
${variables}
:host {
  display: grid;
  grid-area: 1 / -1;

  place-self: var(--align-self, center) var(--justify-self, center);
  transform: translate(var(--translate-x, 0), var(--translate-y, 0));
}

:host([hidden]) {
  display: none;
}

:host > button {
  pointer-events: auto;
  background-color: white;
  border: 1px solid hotpink;
  padding: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
  cursor: var(--cursor);

  /* increase tap target size */

  &::before {
    content: '';
    position: absolute;
    inset: -10px;
  }
}

:host([placement^="top"]) {
  --align-self: start;
  --translate-y: -50%;
}

:host([placement^="bottom"]) {
  --align-self: end;
  --translate-y: 50%;
}

:host([placement$="start"]) {
  --justify-self: start;
  --translate-x: -50%;
}

:host([placement$="end"]) {
  --justify-self: end;
  --translate-x: 50%;
}

:host([placement^="top"]),
:host([placement^="bottom"]) {
  --cursor: ns-resize;
}

:host([placement$="start"]),
:host([placement$="end"]) {
  --cursor: ew-resize;
}

:host([placement="top-start"]) {
  --cursor: nw-resize;
}

:host([placement="top-end"]) {
  --cursor: ne-resize;
}

:host([placement="bottom-start"]) {
  --cursor: sw-resize;
}

:host([placement="bottom-end"]) {
  --cursor: se-resize;
}

`);
export const HoverStyles = constructStylesheet(`
${variables}
:host rect {
  --layer-5: 2147483642;
  width: 100%;
  height: 100%;
  vector-effect: non-scaling-stroke;
  stroke: var(--hover-stroke, var(--theme-purple, hsl(267 100% 58%)));
  stroke-width: 1px;
  fill: none;
}

:host > svg {
  z-index: var(--layer-5);
}
`);
