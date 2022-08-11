import Sidebar from "../components/sidebar";
import Table from "../components/sidebar/table";
import Chart from "../components/sidebar/chart";
import HeaderAdmin from "../components/sidebar/headerAdmin";

export default function Order() {
  return (
    <div className="w-full min-h-screen flex flex-row">
      <Sidebar />

      {/* Header */}
      <div className="w-screen mx-12 mt-10">
        <HeaderAdmin name="Order Barang" />

        <input
          type="date"
          className="text-orange-default font-bold color-orange-default mt-10"
        />

        {/* Chart */}
        {/* <Chart /> */}
        {/* Table */}
        <Table />
      </div>
    </div>
  );
}