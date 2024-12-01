import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ReportOne from "@/components/Reports/ReportOne";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const ReportsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Reports" />

      <div className="flex flex-col gap-10">
        <ReportOne />
      </div>
    </DefaultLayout>
  );
};

export default ReportsPage;
