"use client"

import { Sidebar, SidebarContent, SidebarGroup, SidebarMenu,SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import Link from "next/link";
import { LogOutIcon, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { StudioSidebarHeader } from "./studio-sidebar-header";

export const StudioSidebar = () => {
  const pathname=usePathname()
  return (
    <Sidebar className="pt-16 z-40" collapsible="icon">
        <SidebarContent className="bg-background">
            <SidebarGroup>
              <SidebarMenu>
                <StudioSidebarHeader></StudioSidebarHeader>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={pathname==='/studio'} tooltip="Content" asChild>
                    <Link href="/studio">
                      <VideoIcon className="size-5">
                      </VideoIcon>
                      <span className="text-sm">Content</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <Separator></Separator>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Exit Studio" asChild>
                    <Link href="/">
                      <LogOutIcon className="size-5">
                      </LogOutIcon>
                      <span className="text-sm">Exit Studio</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
  )
}