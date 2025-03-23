"use client"

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroupLabel} from "@/components/ui/sidebar"
import { HistoryIcon,ListVideoIcon,ThumbsUpIcon } from "lucide-react"
import Link from "next/link"

const items=[
    {
        title: "History",
        url:"/playlists/history",
        icon:HistoryIcon,
        auth:true
    },
    {
        title: "Liked Videos",
        url:"/playlists/liked",
        icon:ThumbsUpIcon,
        auth:true
    },
    {
        title: "All Playlists",
        url:"/playlists",
        icon:ListVideoIcon,
    },
]

export const PersonalSection = () => {
  return (
    <SidebarGroup>
        <SidebarGroupLabel>You</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu>
                {items.map((item)=>(
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton tooltip={item.title} asChild isActive={false} onClick={()=>{}}>
                            {/* TODO: change isActive to look at current pathname */}
                            {/* TODO: Do something on click */}
                            <Link href={item.url} className="flex items-center gap-4">
                            <item.icon></item.icon>
                            <span className="text-sm">{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  )
}