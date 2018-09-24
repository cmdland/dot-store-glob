import { promisify } from "util"
import globWithCallback from "glob"

const glob = promisify(globWithCallback)

export default store => {
  store.withOp("glob").onAny(async ({ event }) => {
    const paths = await glob(event.args[0], event.args[1])
    await store.set(event.props, paths)
  })
  return store
}
