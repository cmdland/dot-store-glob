# dot-glob

Glob filename matching with `dot-store`.

![cli](https://gifer.com/i/68UI.gif)

## Create store

```js
import createStore from "dot-store"
import glob from "dot-glob"

const store = glob(createStore())
```

## Glob some files

```js
await store.set("paths", "**/*.js", {
  ignore: "**/*Test.js",
})
store.get("paths") // array of paths
```
