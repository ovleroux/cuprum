import { columns, HSCodes } from "./tarrif-columns"
import { DataTable } from "./data-table";
import { SidebarInset } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header-harmony";


import data from "@/lib/hs-codes.json"

export default function Page() {
  return (
    <SidebarInset>
    <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <DataTable columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
    </SidebarInset>
  )
};

