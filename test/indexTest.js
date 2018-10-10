import dotEvent from "dot-event"
import dotStore from "dot-store"
import glob from "../dist/glob"

test("glob files", async () => {
  const events = dotEvent()
  const store = dotStore(events)

  glob({ events, store })

  await events.glob("test", {
    pattern: `${__dirname}/*Test.js`,
  })

  expect(store.get("glob.test").length).toBe(1)
})
