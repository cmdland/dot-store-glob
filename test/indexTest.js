import dotEvent from "dot-event"
import dotStore from "@dot-event/store"
import glob from "../dist/glob"

test("glob files", async () => {
  const events = dotEvent()
  const store = dotStore({ events })

  glob({ events, store })

  const out = await events.glob("test", {
    cwd: __dirname,
    pattern: "*Test.js",
    save: true,
  })

  expect(out.length).toBe(1)
  expect(store.get("test").length).toBe(1)
})
