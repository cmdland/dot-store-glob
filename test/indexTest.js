import Store from "dot-store"
import glob from "../dist/glob"

test("glob files", async () => {
  const store = glob(new Store())
  await store.set(
    "glob.test.pattern",
    `${__dirname}/*Test.js`
  )
  expect(store.get("glob.test.paths").length).toBe(1)
})
