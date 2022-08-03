import Sidebar from "../components/sidebar";
export default function Admin() {
  return (
    <div className="w-full min-h-screen flex flex-row">
      <Sidebar />
      <div className="w-screen">
        <input
          type="text"
          placeholder="Search"
          className="border border-orange-dark mx-auto"
        />
        <div className="flex">
          <div className="flex-1">Kiri</div>
          <div className="flex-1">Kanan</div>
        </div>
      </div>
    </div>
  );
}
