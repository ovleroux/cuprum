import { SidebarInset } from "@/components/ui/sidebar"
import { DataTable } from "@/components/data-table"
import { SiteHeader } from "@/components/site-header-git"


import data from "@/app/dashboard/data.json"

export default function Page() {
  return (
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
  )
};