import React, { useState, useEffect } from "react";

export default function CekStokProduk() {
  const [produkData, setProdukData] = useState([]);
  const [kodeProduk, setKodeProduk] = useState("");
  const [error, setError] = useState("");
  const [hasil, setHasil] = useState(null);

  useEffect(() => {
    fetch("/produk.json")
      .then((res) => res.json())
      .then(setProdukData)
      .catch(() => setError("Gagal memuat data produk"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!kodeProduk) {
      setError("Kode produk tidak boleh kosong");
      setHasil(null);
      return;
    }
    if (kodeProduk.length < 4) {
      setError("Kode produk minimal 4 karakter");
      setHasil(null);
      return;
    }

    setError("");

    const produk = produkData.find(
      (p) => p.kode_produk.toLowerCase() === kodeProduk.toLowerCase()
    );

    if (!produk) {
      setHasil({ status: "notfound" });
    } else if (produk.stok > 0) {
      setHasil({ status: "available", produk });
    } else {
      setHasil({ status: "outofstock", produk });
    }
  };

  return (
  <div
  className="w-full bg-cover bg-center py-20 px-6 flex justify-center items-center"
  style={{ backgroundImage: "url('/images/bgabu.jpg')" }}
>

    <div className="max-w-2xl w-full text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
        CEK STOK PRODUK DISINI !
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg italic">
        Daftarkan email Anda untuk mendapatkan informasi terbaru seputar kue-kue terbaru, penawaran spesial, dan promo menarik dari Toko Kue Eren.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 relative max-w-2xl mx-auto">
        <input
          type="text"
          id="kodeProduk"
          value={kodeProduk}
          onChange={(e) => setKodeProduk(e.target.value)}
          placeholder="Subscribe to our newsletter..."
          className="w-full py-4 pl-6 pr-12 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500 text-gray-700 text-sm"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4l16 8-16 8V4z"
            />
          </svg>
        </button>
      </form>

      {/* Error */}
      {error && (
        <p className="text-red-600 mt-4 font-medium text-sm">{error}</p>
      )}

      {/* HASIL */}
      <div className="mt-10">
        {hasil?.status === "available" && (
          <div className="bg-green-100 border border-green-300 px-4 py-3 rounded text-left">
            <p className="text-green-800 font-semibold">
              Produk <span className="italic">{hasil.produk.nama_produk}</span> tersedia.
            </p>
            <p>Harga: <span className="font-bold text-green-700">Rp{hasil.produk.harga.toLocaleString("id-ID")}</span></p>
            <p>Stok tersedia: {hasil.produk.stok}</p>
          </div>
        )}

        {hasil?.status === "outofstock" && (
          <div className="bg-yellow-100 border border-yellow-300 px-4 py-3 rounded text-left">
            <p className="text-yellow-800 font-semibold">
              Produk <span className="italic">{hasil.produk.nama_produk}</span> saat ini habis.
            </p>
            <p className="font-bold text-red-600">Out of Stock</p>
          </div>
        )}

        {hasil?.status === "notfound" && (
          <div className="bg-red-100 border border-red-300 px-4 py-3 rounded text-left">
            <p className="text-red-800 font-semibold">Kode produk tidak ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

}
