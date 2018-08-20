import { promisify } from "util"
import globWithCallback from "glob"

const glob = promisify(globWithCallback)

export default store => {
  store.on(
    "glob.{ns}.pattern",
    async ({ ns, subscriber }) => {
      const paths = await glob(subscriber.value)
      await store.set(`glob.${ns}.paths`, paths)
    }
  )
  return store
}
