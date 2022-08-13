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
          <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-orange-gray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
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
