import dotEvent from "dot-event"
import dotStore from "@dot-event/store"

import dotGlob from "../"

test("glob files", async () => {
  const events = dotEvent()

  dotGlob({ events })
  dotStore({ events })

  const out = await events.glob("test", {
    cwd: __dirname,
    pattern: "*Test.js",
    save: true,
  })

  expect(out.length).toBe(1)
  expect(events.get("test").length).toBe(1)
})
