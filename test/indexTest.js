import dotEvent from "dot-event"
import dotStore from "dot-store"
import glob from "../dist/glob"

test("glob files", async () => {
  const events = dotEvent()
  const store = dotStore(events)

  glob({ events, store })

  const out = await events.glob("test", {
    action: "storeGlob",
    pattern: `${__dirname}/*Test.js`,
  })

  expect(out.length).toBe(1)
  expect(store.get("test").length).toBe(1)
})
