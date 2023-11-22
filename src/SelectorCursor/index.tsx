import {Hover} from './hover.element.js';
import {Handles} from './handles.element.js';
import {Handle} from './handle.element.js';
import $ from 'blingblingjs';
import {
  createMeasurements,
  clearMeasurements,
  createPaddingVisual,
} from './utilities/measurements';
import {createMarginVisual} from './utilities/margin';
import {isFixed} from './utilities';
import React, {useEffect, useState} from "react";


const state: any = {
  drag: {
    src: null,
    parent: null,
    parent_ui: [],
    siblings: new Map(),
    swapping: new Map(),
  },
  hover: {
    dropzones: [],
    observers: [],
  },
};

export const createParentUI = (parent) => {
  const hover: any | Hover = document.createElement('visbug-hover');
  const label: any = document.createElement('visbug-label');

  hover.position = {el: parent};
  hover.setAttribute('visbug-drag-container', true);

  label.text = 'Drag Bounds';
  label.position = {boundingRect: parent.getBoundingClientRect()};
  label.style.setProperty('--label-bg', 'var(--theme-purple)');

  document.body.appendChild(hover);
  document.body.appendChild(label);

  const observer = new MutationObserver((list) => {
    hover.position = {el: parent};
    label.position = {boundingRect: parent.getBoundingClientRect()};
  });

  observer.observe(parent, {
    childList: true,
    subtree: true,
  });

  state.hover.observers.push(observer);

  return [hover, label];
};

export const defineElements = () => {
  // https://stackoverflow.com/questions/42800035/why-cant-you-create-custom-elements-in-content-scripts
  customElements.define('visbug-hover', Hover);
  customElements.define('visbug-handles', Handles);
  customElements.define('visbug-handle', Handle);
};

export function Selectable(visbug?: any) {
  const page: HTMLElement | any = document.body;
  const $page: HTMLElement | any = $(page);
  let selected = [];
  let selectedCallbacks = [];
  let labels = [];
  let handles = [];

  const hover_state = {
    target: null,
    element: null,
    label: null,
  };
  const listen = () => {
    page.addEventListener('click', on_click, true);
    page.addEventListener('dblclick', on_dblclick, true);
    $page.on('selectstart', on_selection);
    $page.on('mousemove', on_hover);
  };

  const unlisten = () => {
    page.removeEventListener('click', on_click, true);
    page.removeEventListener('dblclick', on_dblclick, true);
    $page.off('selectstart', on_selection);
    $page.off('mousemove', on_hover);
  };

  const on_hover = (e) => {
    const $target = deepElementFromPoint(e.clientX, e.clientY);
    const tool = visbug?.activeTool;

    if (
      isOffBounds($target) ||
      $target.hasAttribute('data-selected') ||
      $target.hasAttribute('draggable')
    ) {
      clearMeasurements();
      return clearHover();
    }

    overlayHoverUI({
      el: $target,
      // no_hover: tool === 'guides',
      no_label:
        tool === 'guides' ||
        tool === 'accessibility' ||
        tool === 'margin' ||
        tool === 'padding' ||
        tool === 'inspector',
    });

    if (
      tool === 'guides' &&
      selected.length >= 1 &&
      !selected.includes($target)
    ) {
      $target.setAttribute('data-measuring', true);
      const [$anchor] = selected;
      createMeasurements({$anchor, $target});
    } else if (
      tool === 'margin' &&
      !hover_state.element.$shadow.querySelector('visbug-boxmodel')
    ) {
      hover_state.element.$shadow.appendChild(
        createMarginVisual(hover_state.target, true),
      );
    } else if (
      tool === 'padding' &&
      !hover_state.element.$shadow.querySelector('visbug-boxmodel')
    ) {
      hover_state.element.$shadow.appendChild(
        createPaddingVisual(hover_state.target, true),
      );
    } else if (
      $target.hasAttribute('data-measuring') ||
      selected.includes($target)
    ) {
      clearMeasurements();
    }
  };

  const on_selection = (e) =>
    !isOffBounds(e.target) &&
    selected.length &&
    selected[0].textContent != e.target.textContent &&
    e.preventDefault();

  const clearHover = () => {
    if (!hover_state.target) return;

    hover_state.element && hover_state.element.remove();
    hover_state.label && hover_state.label.remove();

    hover_state.target = null;
    hover_state.element = null;
    hover_state.label = null;
  };

  const createHover = (el) => {
    if (
      !el.hasAttribute('data-pseudo-select') &&
      !el.hasAttribute('data-label-id')
    ) {
      if (hover_state.element) hover_state.element.remove();

      hover_state.element = document.createElement('visbug-hover');
      document.body.appendChild(hover_state.element);
      hover_state.element.position = {el};

      return hover_state.element;
    }
  };

  const createHoverLabel = (el, text) => {
    if (
      !el.hasAttribute('data-pseudo-select') &&
      !el.hasAttribute('data-label-id')
    ) {
      if (hover_state.label) hover_state.label.remove();

      hover_state.label = document.createElement('visbug-label');
      document.body.appendChild(hover_state.label);

      hover_state.label.text = text;
      hover_state.label.position = {
        boundingRect: el.getBoundingClientRect(),
        node_label_id: 'hover',
      };

      hover_state.label.style.setProperty(`--label-bg`, `hsl(267, 100%, 58%)`);

      return hover_state.label;
    }
  };

  const overlayHoverUI = ({el, no_hover = false, no_label = true}) => {
    if (hover_state.target === el) return;
    hover_state.target = el;

    hover_state.element = no_hover ? null : createHover(el);

    hover_state.label = no_label
      ? null
      : createHoverLabel(el, handleLabelText(el, visbug?.activeTool));
  };

  const setHandle = (el, handle) => {
    handle.position = {
      el,
      node_label_id: el.getAttribute('data-label-id'),
    };
  };

  const createObserver = (node, {label, handle}) =>
    new MutationObserver((list) => {
      label && setLabel(node, label);
      handle && setHandle(node, handle);
    });

  const overlayMetaUI = ({el, id, no_label = true}) => {
    let handle = createHandle({el, id});
    let label = no_label
      ? null
      : createLabel({
        el,
        id,
        template: handleLabelText(el, visbug?.activeTool),
      });

    let observer = createObserver(el, {handle, label});
    let parentObserver = createObserver(el, {handle, label});

    observer.observe(el, {attributes: true});
    parentObserver.observe(el.parentNode, {childList: true, subtree: true});

    $(label).on('DOMNodeRemoved', (_) => {
      observer.disconnect();
      parentObserver.disconnect();
    });
  };

  const setLabel = (el, label) => {
    label.text = handleLabelText(el, visbug?.activeTool);
    label.update = {
      boundingRect: el.getBoundingClientRect(),
      isFixed: isFixed(el),
    };
  };

  const createLabel = ({el, id, template}) => {
    if (!labels[id]) {
      const label: any = document.createElement('visbug-label');

      label.text = template;
      label.position = {
        boundingRect: el.getBoundingClientRect(),
        node_label_id: id,
        isFixed: isFixed(el),
      };

      document.body.appendChild(label);

      labels[labels.length] = label;

      return label;
    }
  };

  const createHandle = ({el, id}) => {
    if (!handles[id]) {
      const handle: any = document.createElement('visbug-handles');

      handle.position = {el, node_label_id: id};

      document.body.appendChild(handle);

      handles[handles.length] = handle;
      return handle;
    }
  };

  const select = (el) => {
    console.log('select', el);

    const id = handles.length;
    const tool = visbug?.activeTool;

    el.setAttribute('data-selected', true);
    el.setAttribute('data-label-id', id);

    clearHover();

    overlayMetaUI({
      el,
      id,
      no_label:
        tool === 'inspector' || tool === 'guides' || tool === 'accessibility',
    });

    selected.unshift(el);
    tellWatchers();
  };

  const on_click = (e) => {
    const $target = deepElementFromPoint(e?.clientX, e?.clientY);
    if (isOffBounds($target) && !selected.filter((el) => el == $target).length)
      return;
    e.preventDefault();
    if (!e.altKey) e.stopPropagation();

    if (!e.shiftKey) {
      unselect_all({silent: true});
      clearMeasurements();
    }

    if (e.shiftKey && $target.hasAttribute('data-selected')) {
      unselect($target.getAttribute('data-label-id'));
    } else {
      select($target);
    }
  };

  const unselect = (id) => {
    [...labels, ...handles]
      .filter((node) => node.getAttribute('data-label-id') === id)
      .forEach((node) => node.remove());

    selected
      .filter((node) => node.getAttribute('data-label-id') === id)
      .forEach((node) =>
        $(node).attr({
          'data-selected': null,
          'data-selected-hide': null,
          'data-label-id': null,
          'data-pseudo-select': null,
          'data-measuring': null,
          'data-outward': null,
        }),
      );

    selected = selected.filter(
      (node) => node.getAttribute('data-label-id') !== id,
    );

    tellWatchers();
  };

  const tellWatchers = () => selectedCallbacks.forEach((cb) => cb(selected));

  const unselect_all = ({silent = false} = {}) => {
    selected.forEach((el) =>
      $(el).attr({
        'data-selected': null,
        'data-selected-hide': null,
        'data-label-id': null,
        'data-pseudo-select': null,
        'data-outward': null,
      }),
    );

    $('[data-pseudo-select]').forEach((hover) =>
      hover.removeAttribute('data-pseudo-select'),
    );

    Array.from([
      ...$('visbug-handles'),
      ...$('visbug-label'),
      ...$('visbug-hover'),
      ...$('visbug-distance'),
    ]).forEach((el) => el.remove());

    labels = [];
    handles = [];
    selected = [];

    !silent && tellWatchers();
  };
  const on_dblclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOffBounds(e.target)) return;
  };

  const selection = () => selected;

  const onSelectedUpdate = (cb, immediateCallback = true) => {
    selectedCallbacks.push(cb);
    if (immediateCallback) cb(selected);
  };

  const removeSelectedCallback = (cb) =>
    (selectedCallbacks = selectedCallbacks.filter(
      (callback) => callback != cb,
    ));
  const disconnect = () => {
    unselect_all();
    unlisten();
  };
  return {
    connect: () => listen(),
    // 关闭事件，退出选择模式
    disconnect,
    // 获取当前选中的元素
    selection,
    // 选择某个元素
    select,
    // 取消选择
    unselect_all,
    // 监听选中元素事件
    onSelectedUpdate,
    // 移除监听选中事件
    removeSelectedCallback,
  } as SelectableResult;
}

export interface SelectableResult {
  connect: () => void,
  disconnect: () => void;
  selection: () => (HTMLElement | any)[];
  select: (el: HTMLElement | any) => void;
  unselect_all: (options?: { silent?: boolean }) => void;
  onSelectedUpdate: (cb: any, immediateCallback?: boolean) => void;
  removeSelectedCallback: (cb: any) => void;
}

export interface Options {
}

export const useSelectable = (options?: Options) => {
  if (typeof window === 'undefined') return {};
  let [selectable, setSelectable] = useState<SelectableResult>(() => {
    defineElements();
    return Selectable();
  });
  return selectable as SelectableResult;
};

export const deepElementFromPoint = (x = 0, y = 0) => {
  const el = document.elementFromPoint(x, y);

  const crawlShadows = (node) => {
    if (node.shadowRoot) {
      const potential = node.shadowRoot.elementFromPoint(x, y);

      if (potential == node) return node;
      else if (potential.shadowRoot) return crawlShadows(potential);
      else return potential;
    } else return node;
  };

  const nested_shadow = crawlShadows(el);

  return nested_shadow || el;
};

export const isOffBounds = (node) => node.closest &&
  (node.closest('vis-bug') ||
    node.closest('hotkey-map') ||
    node.closest('visbug-metatip') ||
    node.closest('visbug-ally') ||
    node.closest('visbug-label') ||
    node.closest('visbug-handles') ||
    node.closest('visbug-corners') ||
    node.closest('visbug-grip') ||
    node.closest('visbug-gridlines'));

export const handleLabelText = (el, activeTool) => {
  switch (activeTool) {
    case 'align':
      return getStyle(el, 'display');

    default:
      return `
        <a node>${el.nodeName.toLowerCase()}</a>
        <a>${el.id && '#' + el.id}</a>
        ${createClassname(el)
        .split('.')
        .filter((name) => name != '')
        .reduce(
          (links, name) => `
            ${links}
            <a>.${name}</a>
          `,
          '',
        )}
      `;
  }
};

export const getStyle = (el, name) => {
  if (document.defaultView && document.defaultView.getComputedStyle) {
    name = name.replace(/([A-Z])/g, '-$1');
    name = name.toLowerCase();
    let s = document.defaultView.getComputedStyle(el, '');
    return s && s.getPropertyValue(name);
  }
};

export const createClassname = (el, ellipse = false) => {
  if (!el.className) return '';

  const combined: any = Array.from(el.classList).reduce(
    (classnames, classname) => (classnames += '.' + classname),
    '',
  );

  return ellipse && combined.length > 30
    ? combined.substring(0, 30) + '...'
    : combined;
};

export function queryPage(query, fn) {
  // todo: should stash a cleanup method to be called when query doesnt match
  // if (PluginRegistry.has(query))
  //     return PluginRegistry.get(query)({
  //         selected: SelectorEngine.selection(),
  //         query
  //     })
  //
  // if (query == 'links') query = 'a'
  // if (query == 'buttons') query = 'button'
  // if (query == 'images') query = 'img'
  // if (query == 'text') query = 'p,caption,a,h1,h2,h3,h4,h5,h6,small,date,time,li,dt,dd'
  //
  // if (!query) return SelectorEngine.unselect_all()
  // if (query == '.' || query == '#' || query.trim().endsWith(',')) return
  //
  // try {
  //     let matches = querySelectorAllDeep(query + notList)
  //     if (!matches.length) matches = querySelectorAllDeep(query)
  //     if (matches.length) {
  //         matches.forEach(el =>
  //             fn
  //                 ? fn(el)
  //                 : SelectorEngine.select(el))
  //     }
  // } catch (err) {
  // }
}
