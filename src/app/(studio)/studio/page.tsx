import { HydrateClient, trpc } from "@/trpc/server"
import { StudioView } from "@/modules/studio/ui/view/studio-view"
import { DEFAULT_LIMIT } from "@/constants"

const Page = async () => {

  void trpc.studio.getMany.prefetchInfinite({
    limit:DEFAULT_LIMIT
  })

  return (
    <HydrateClient>
      <StudioView></StudioView>
    </HydrateClient>
  )
}
export default Page