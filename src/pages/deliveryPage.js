import Sidebar from "../components/sidebar";
import HeaderAdmin from "../components/sidebar/headerAdmin";
import Table from "../components/sidebar/table";

export default function Delivery() {
  return (
    <div className="w-full min-h-screen flex flex-row">
      <Sidebar />

      {/* Header */}
      <div className="w-screen mx-12 mt-10">
        <HeaderAdmin name="Pengiriman" />

        <input
          type="date"
          className="text-orange-default font-bold color-orange-default mt-10"
        />

        {/* Table */}
        <Table />

        <div className="text-end mt-6">
          <button className="mx-auto rounded-lg bg-orange-default font-medium py-1 px-8">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
