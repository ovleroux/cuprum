
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset } from "@/components/ui/sidebar"
import { CoverageChart } from "@/components/analytics/coverage-chart"
import { ExportDocumentationChart } from "@/components/analytics/export-documentation-chart"
import { CEOutstandingChart } from "@/components/analytics/ce-outstanding"
import { AMOutstandingChart } from "@/components/analytics/am-outstanding"
import data from "./data.json"

export default function Page() {
  return (
    <SidebarInset>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <CoverageChart />
            </div>
            <div className="px-4 lg:px-6">
              <ExportDocumentationChart />
            </div>
            <div className="flex px-4 lg:px-6 gap-4">
              <CEOutstandingChart />
              <AMOutstandingChart />
            </div>
            <div className="px-4 px-6">
              
            </div>
            {/* <DataTable data={data} /> */}
          </div>
        </div>
      </div>
    </SidebarInset>
  )
};


        

      