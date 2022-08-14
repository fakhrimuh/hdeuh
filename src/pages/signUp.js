import Blob from "../assets/login-bg.png";
import Logo from "../assets/logo.jpeg";
import Shopping from "../assets/shopping.png";

export default function SignUp() {
  return (
    <div>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6"> */}
      <div className="flex flex-wrap md:items-center w-full h-full">
        <div className=" w-screen md:w-4/6 h-screen">
          <img
            src={Blob}
            className="h-3/4 w-3/4 relative h-full"
            alt="graph illustrations"
          />

          <div className="absolute top-1/2 left-16 -translate-x-auto -translate-y-1/2">
            <img src={Shopping} alt="shopping" className="mx-auto w-80 h-80" />
            <p className="text-6xl font-semibold text-orange-default font-bold">
              Manage and Handle <br /> distribution in one
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-2/6 h-screen">
          <div className="max-w-sm rounded overflow-hidden shadow-2xl h-5/6 mt-10 mb-10">
            <form class="w-full max-w-sm">
              <img src={Logo} alt="Logo" className="w-36 h-36 mx-auto" />

              {/* Nama Lengkap */}
              <div className="mb-4 px-10 mx-auto">
                <input
                  className="appearance-none border-2 border-orange-black w-full py-2 px-2"
                  type="text"
                  placeholder="Nama Lengkap"
                />
              </div>

              {/* Nomor telepon */}
              <div class="mb-4 px-10 mx-auto">
                <input
                  className="appearance-none border-2 border-orange-black w-full py-2 px-2"
                  type="number"
                  placeholder="Nomor Telepon"
                />
              </div>

              {/* Username */}
              <div className="mb-4 px-10 mx-auto">
                <input
                  className="appearance-none border-2 border-orange-black w-full py-2 px-2"
                  type="text"
                  placeholder="Username"
                />
              </div>

              {/* Password */}
              <div class="mb-4 px-10 mx-auto">
                <input
                  className="appearance-none border-2 border-orange-black w-full py-2 px-2"
                  type="password"
                  placeholder="Password"
                />
              </div>

              {/* Konfirmasi Password */}
              <div className="mb-6 px-10 mx-auto">
                <input
                  className="appearance-none border-2 border-orange-black w-full py-2 px-2"
                  type="password"
                  placeholder="Konfirmasi Password"
                />
              </div>
              <div class="md:flex px-6 mb-6 mx-auto">
                <button
                  className="mx-auto border-orange-light bg-orange-default text-orange-light font-bold py-2 px-20"
                  type="button"
                >
                  Signup Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
