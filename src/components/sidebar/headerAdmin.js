import Notification from "../../assets/icons/notifications.png";

export default function HeaderAdmin(props) {
  return (
    <div className="flex justify-between">
      <div className="">
        <h3 className="text-4xl font-bold">{props.name}</h3>
      </div>
      <div class="">
        <input
          className="border-2 border-orange-black rounded-md w-full py-2 px-2"
          type="text"
          placeholder="Search"
        />
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
