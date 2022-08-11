import React from "react";
import Logo from "../../assets/logo.jpeg";
import Dashboard from "../../assets/icons/dashboard.png";
import Logout from "../../assets/icons/logout.png";
import Order from "../../assets/icons/order.png";
import Pembayaran from "../../assets/icons/pembayaran.png";
import Pengiriman from "../../assets/icons/pengiriman.png";
import Produk from "../../assets/icons/produk.png";
import Settings from "../../assets/icons/settings.png";
import Toko from "../../assets/icons/toko.png";
import { Link } from "react-router-dom";
import Modal from "../modal";

export default function Sidebar() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="h-screen bg-orange-default w-64 px-9">
      <div className="flex flex-row items-center mb-8">
        <img
          src={Logo}
          alt="Logo"
          className="w-24 h-24 rounded-full mx-auto mt-4"
        />
      </div>

      <div>
        <nav className="">
          <Link
            to="/admin"
            className="mb-5 flex flex-row opacity-50 hover:opacity-100 focus:opacity-100"
          >
            <img src={Dashboard} alt="icon" className="w-5 h-5 mr-4 my-auto" />
            <div className="font-semibold">Dashboard</div>
          </Link>

          <Link
            to="/order"
            className="mb-5 flex flex-row opacity-50 hover:opacity-100 focus:opacity-100"
          >
            <img src={Order} alt="icon" className="w-5 h-5 mr-4 my-auto" />
            <div className="font-semibold">Order Barang</div>
          </Link>

          <Link
            to="/payment"
            className="mb-5 flex flex-row opacity-50 hover:opacity-100 focus:opacity-100"
          >
            <img src={Pembayaran} alt="icon" className="w-5 h-5 mr-4 my-auto" />
            <div className="font-semibold">Pembayaran</div>
          </Link>

          <Link
            to="/product"
            className="mb-5 flex flex-row opacity-50 hover:opacity-100 focus:opacity-100"
          >
            <img src={Produk} alt="icon" className="w-5 h-5 mr-4 my-auto" />
            <div className="font-semibold">Produk</div>
          </Link>

          <Link
            to="/store"
            className="mb-5 flex flex-row opacity-50 hover:opacity-100 focus:opacity-100"
          >
            <img src={Toko} alt="icon" className="w-5 h-5 mr-4 my-auto" />
            <div className="font-semibold">Toko</div>
          </Link>

          <Link
            to="/delivery"
            className="mb-5 flex flex-row opacity-50 hover:opacity-100 focus:opacity-100"
          >
            <img src={Pengiriman} alt="icon" className="w-5 h-5 mr-4 my-auto" />
            <div className="font-semibold">Pengiriman</div>
          </Link>

          <hr className="mt-4 mb-4" />
          <a
            href="#!"
            onClick={() => {
              setShowModal(true);
            }}
            className="mb-5 flex flex-row opacity-50 hover:opacity-100 focus:opacity-100"
          >
            <img src={Logout} alt="icon" className="w-5 h-5 mr-4 my-auto" />
            <div className="font-semibold">Logout</div>
          </a>
          {showModal && <Modal setOpenModal={setShowModal} />}

          <Link
            to="/login"
            className="mb-5 flex flex-row opacity-50 hover:opacity-100 focus:opacity-100 "
          >
            <img src={Settings} alt="icon" className="w-5 h-5 mr-4 my-auto" />
            <div className="font-semibold">Settings</div>
          </Link>
        </nav>
      </div>
    </div>
  );
}
