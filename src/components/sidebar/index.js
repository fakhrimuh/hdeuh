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

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: "A" },
    { name: "Order Barang", icon: "B" },
    { name: "Pembayaran", icon: "C" },
    { name: "Produk", icon: "D" },
    { name: "Toko", icon: "E" },
    { name: "Pengiriman", icon: "F" },
  ];

  const utils = [
    { name: "Logout", icon: "G" },
    { name: "Setting", icon: "H" },
  ];

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
        <ul className="">
          {menu.map((val, index) => {
            return (
              <li key={index} className="mb-4 flex flex-row">
                <div className="mr-4">{val.icon}</div>
                <div className="font-semibold">{val.name}</div>
              </li>
            );
          })}
        </ul>
      </div>

      <hr className="mt-4 mb-4" />

      <div>
        <ul className="">
          {utils.map((val, index) => {
            return (
              <li key={index} className="mb-4 flex flex-row">
                <div className="mr-4">{val.icon}</div>
                <div className="font-semibold">{val.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
