import { Link } from "react-router-dom";
import Blob from "../assets/blob-full.png";
import Logo from "../assets/logo.jpeg";
import Shopping from "../assets/shopping.png";

export default function Login() {
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
            <p className="text-6xl font-semibold text-orange-black opacity-50">
              Manage and Handle <br /> distribution in one
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-2/6 h-screen">
          <div className="max-w-sm rounded overflow-hidden shadow-2xl h-5/6 mt-10 mb-10">
            <form class="w-full max-w-sm mx-auto">
              <img src={Logo} alt="Logo" className="w-36 h-36 mx-auto" />
              <div className="mb-4 px-10 mx-auto">
                <input
                  className="appearance-none border-2 border-orange-black w-full py-2 px-2"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div class="mb-6 px-10 mx-auto">
                <input
                  className="appearance-none border-2 border-orange-black w-full py-2 px-2"
                  type="password"
                  placeholder="Password"
                />
                <p class="text-right text-sm font-semibold mb-2">
                  Forgot Password?
                </p>
              </div>
              <Link to="/admin">
                <div class="md:flex px-6 mb-6 mx-auto">
                  <button
                    className="mx-auto border-orange-light bg-orange-default text-orange-light font-bold py-2 px-20"
                    type="button"
                  >
                    Login
                  </button>
                </div>
              </Link>

              <div class="md:flex px-6 mb-6 mx-auto">
                <Link
                  to="/signup"
                  className="px-10 mb-6 text-center mx-auto font-medium opacity-80"
                >
                  Signup Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
