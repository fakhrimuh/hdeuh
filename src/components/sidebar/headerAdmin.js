import Notification from "../../assets/icons/notifications.png";

export default function HeaderAdmin(props) {
  return (
    <div className="flex justify-between">
      <div className="">
        <h3 className="text-4xl font-bold">{props.name}</h3>
      </div>

      <div class="">
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Searching"
            type="text"
            name="search"
          />
        </label>
      </div>

      <div class="flex">
        <img src={Notification} alt="bell" className="flex-1 h-12 w-12 mr-8" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Nicholas_Saputra%2C_Sorgemagz.com_-_1_Pertanyaan%2C_1_Orang%2C_Nicholas_Saputra.jpg/220px-Nicholas_Saputra%2C_Sorgemagz.com_-_1_Pertanyaan%2C_1_Orang%2C_Nicholas_Saputra.jpg"
          alt="foto profil"
          className="rounded-full h-12 w-12 flex-1 mr-2"
        />

        <p className="font-medium my-auto">Emul Stephen</p>
      </div>
    </div>
  );
}
