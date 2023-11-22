# selector-cursor

This is an example component.

```jsx
import {useSelectable} from '@hocgin/selector-cursor';

export default () => {
  let selectable = useSelectable();

  return <div>
    <h1>hello world</h1>
    <p>hello world <a id='hocgin' href="https://logspot.hocgin.top">link</a></p>
    <p>hello world</p>
    <hr />
    <h1>control</h1>
    <vis-bug>
      <button onClick={(e) => selectable.disconnect()}>disconnect
      </button>
      <button onClick={(e) => selectable.connect()}>connect
      </button>
      <button onClick={selectable.unselect_all}>unselect_all</button>
      <button onClick={() => {
        let elements = selectable.selection();
        alert(`selectable element size:` + elements.length);
      }}>selection
      </button>
      <button onClick={() => {
        let link = document.getElementById("hocgin");
        if (!link) return;
        selectable.select(link)
      }}>select #hocgin
      </button>
    </vis-bug>
  </div>;
}
```
