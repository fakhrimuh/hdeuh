import Sidebar from "../components/sidebar";
import Table from "../components/sidebar/table";
import HeaderAdmin from "../components/sidebar/headerAdmin";

export default function Payment() {
  return (
    <div className="w-full min-h-screen flex flex-row">
      <Sidebar />

      {/* Header */}
      <div className="w-screen mx-12 mt-10">
        <HeaderAdmin name="Pembayaran" />

        <input
          type="date"
          className="text-orange-default font-bold color-orange-default mt-10"
        />

        <p className="font-bold">
          Status :{" "}
          <span className="text-orange-red uppercase">belum bayar</span>
        </p>

        {/* Table */}
        <Table />

        <div className="flex font-bold">
          <p className="flex-1">Jumlah Bayar:</p>
          <span className="text-end"> RP. 000.0000</span>
        </div>

        <div className="text-end mt-6">
          <button className="mx-auto rounded-lg bg-orange-default font-medium py-1 px-8 mr-4">
            Edit
          </button>
          <button className="mx-auto rounded-lg bg-orange-default font-medium py-1 px-8">
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
}
