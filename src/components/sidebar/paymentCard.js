export default function PaymentCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden">
      <div className="font-bold text-2xl bg-orange-default text-center py-3">
        Sisa Pembayaran
      </div>
      <div className="px-6 py-4 bg-orange-default bg-opacity-40">
        <div className="flex">
          <p className="flex-1">Belum Ditagih:</p>
          <span className="flex-1">RP. 1.234.567</span>
        </div>
        <div className="flex">
          <p className="flex-1">Hutang Toko:</p>
          <span className="flex-1">RP. 1.234.567</span>
        </div>
      </div>
    </div>
  );
}
