# @dot-store/glob

Glob filename matching with `dot-store`.

![cli](https://gifer.com/i/68UI.gif)

## Create store

```js
import Store from "dot-store"
import glob from "@dot-store/glob"

const store = glob(new Store())
```

## Glob some files

```js
await store.set("glob.myApp.pattern", "**/*.js")
store.get("glob.myApp.paths") // array of paths
```

Substitute `myApp` for any key you like.
