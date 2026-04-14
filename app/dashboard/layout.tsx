import { AppSidebar } from "@/components/app-sidebar"
import {  SidebarProvider } from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset } from "@/components/ui/sidebar"
import type { Metadata } from "next"
import data from "./data.json"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Horizon Dashboard",
};



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
        
        { children }
    
    </SidebarProvider>
  )
}