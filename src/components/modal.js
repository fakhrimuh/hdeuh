import React from "react";
import { Link } from "react-router-dom";

export default function Modal({ setOpenModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-orange-light rounded-md shadow-lg">
            <div className="mt-3 sm:flex">
              <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto text-orange-red rounded-full">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <h4 className="text-lg font-medium text-orange-red">
                  Log Out?
                </h4>
                <p className="mt-2 font-medium text-orange-black">
                  Anda yakin ingin keluar? seluruh pekerjaan anda tidak
                  tersimpan
                </p>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 border border-orange-gray rounded-md outline-none ring-offset-2 ring-orange-default font-medium text-orange-black"
                    onClick={() => setOpenModal(false)}
                  >
                    Cancel
                  </button>
                  <Link
                    to="/"
                    className="w-full mt-2 p-2.5 flex-1 rounded-md outline-none ring-offset-2 bg-orange-red bg-opacity-80 focus:ring-2 hover:bg-opacity-100 text-orange-light"
                  >
                    <button
                      className="w-full flex-1 rounded-md outline-none ring-offset-2 font-medium"
                      onClick={() => setOpenModal(false)}
                    >
                      Log Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
