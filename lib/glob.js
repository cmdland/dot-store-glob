import { promisify } from "util"
import globWithCallback from "glob"

const glob = promisify(globWithCallback)

export default options => {
  const { events } = options

  if (events.ops.has("glob")) {
    return options
  }

  events.onAny({
    glob: async options => {
      const { action = "glob" } = options

      if (actions[action]) {
        await actions[action](options)
      }
    },
  })

  return options
}

const actions = {
  glob: async ({ event, pattern }) => {
    event.signal.returnValue = await glob(
      pattern,
      event.options
    )
  },

  storeGlob: async ({ event, events, store }) => {
    const paths = await events.glob({
      ...event.options,
      action: "glob",
    })

    await store.set(event.props, paths)

    event.signal.returnValue = paths
  },
}
