import { promisify } from "util"
import globWithCallback from "glob"

const glob = promisify(globWithCallback)

export default options => {
  const { events } = options

  if (events.ops.has("glob")) {
    return options
  }

  events
    .withOptions({
      cwd: process.cwd(),
    })
    .onAny({
      glob: async options => {
        const { event, pattern, props, save } = options

        const paths = await glob(pattern, event.options)
        event.signal.returnValue = paths

        if (save) {
          await events.set(props, paths)
        }
      },
    })

  return options
}
