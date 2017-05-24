# babel-log

> Log Babel paths & nodes to console with nice formatting

```js
import {format, log} from 'babel-log';

console.log(format(node, true));

log(node);
log(path);
log({ any: 'value' });
```

## API

```ts
export function log(value: Object): void;
export function format(value: Object, colors: boolean = false): string;
```
