import Sidebar from "../components/sidebar";
import Table from "../components/sidebar/table";
// import CardLineChart from "../components/sidebar/chart";
import CardLineChart from "../components/sidebar/graphChart";
import HeaderAdmin from "../components/sidebar/headerAdmin";
import PaymentCard from "../components/sidebar/paymentCard";

export default function Admin() {
  return (
    <div className="w-full min-h-screen flex flex-row">
      <Sidebar />

      {/* Header */}
      <div className="w-screen mx-12 mt-10">
        <HeaderAdmin name="Dashboard" />
        <input
          type="date"
          className="text-orange-default font-bold color-orange-default mt-10 mb-2"
        />
        <div className="flex mb-2">
          <div className="flex-1">
            <PaymentCard />
          </div>

          <div className="flex-1">
            {/* Chart */}
            <CardLineChart />
          </div>
        </div>

        {/* Table */}
        <Table />
      </div>
    </div>
  );
}
