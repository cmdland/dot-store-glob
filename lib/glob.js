import { promisify } from "util"
import globWithCallback from "glob"

const glob = promisify(globWithCallback)

export default store => {
  store.on(
    "glob.{ns}.pattern",
    async ({ ns, subscriber }) => {
      const ignore = store.get(`glob.${ns}.ignore`)
      const paths = await glob(subscriber.value, { ignore })
      await store.set(`glob.${ns}.paths`, paths)
    }
  )
  return store
}
