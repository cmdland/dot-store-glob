import dotStore from "dot-store"
import glob from "../dist/glob"

test("glob files", async () => {
  const store = glob(dotStore())
  await store.glob("test", `${__dirname}/*Test.js`)
  expect(store.get("test").length).toBe(1)
})
