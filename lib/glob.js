import { promisify } from "util"
import globWithCallback from "glob"

const glob = promisify(globWithCallback)

export default options => {
  const { events, store } = options

  if (events.ops.has("glob")) {
    return options
  }

  events.onAny(
    "glob",
    async ({ event, pattern, options }) => {
      const paths = await glob(pattern, options)
      await store.set(event.props, paths)
    }
  )

  return options
}
