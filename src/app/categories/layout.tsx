
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="overflow-x-hidden">
      <AppSidebar />
      <main className="flex-1 pt-8">
        <SidebarTrigger className="md:hidden" />
        {children}
      </main>
    </SidebarProvider>
  )
}