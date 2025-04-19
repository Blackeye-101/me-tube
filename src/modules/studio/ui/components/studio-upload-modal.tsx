"use client"

import { Button } from "@/components/ui/button"
import { Loader2, PlusIcon, CheckCircleIcon, XCircleIcon } from "lucide-react"
import { trpc } from "@/trpc/client"
import { toast } from "sonner"

export const StudioUploadModal = () => {
  const utils=trpc.useUtils()
  const create= trpc.videos.create.useMutation({
    onSuccess: () => {
    toast("Video uploaded successfully!", {
      icon: <CheckCircleIcon className="text-green-600" />,
    })
    utils.studio.getMany.invalidate()
  },
  onError: () => {
    toast("Oops! Something went wrong", {
      icon: <XCircleIcon className="text-red-600" />,
    })
  }
  })
  return (
    <Button variant="secondary" onClick={()=>create.mutate()} disabled={create.isPending}>
        {create.isPending?<Loader2 className="animate-spin"></Loader2>:<PlusIcon></PlusIcon>}
        Create
    </Button>
  )
}