import React, { useState, useEffect } from "react";

export default function CekStokProduk() {
  const [produkData, setProdukData] = useState([]);
  const [kodeProduk, setKodeProduk] = useState("");
  const [error, setError] = useState("");
  const [hasil, setHasil] = useState(null);

  useEffect(() => {
    fetch("/produk.json")
      .then((res) => res.json())
      .then((data) => setProdukData(data))
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
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Cek Ketersediaan Produk
      </h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <label
          htmlFor="kodeProduk"
          className="block mb-2 font-semibold text-gray-700"
        >
          Kode Produk
        </label>
        <input
          type="text"
          id="kodeProduk"
          value={kodeProduk}
          onChange={(e) => setKodeProduk(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Masukkan kode produk"
        />
        {error && <p className="text-red-600 mt-2">{error}</p>}

        <button
          type="submit"
          className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold"
        >
          Cek Produk
        </button>
      </form>

      {/* Hasil */}
      {hasil && hasil.status === "available" && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative flex items-center space-x-4">
          <div className="text-3xl">✅</div>
          <div>
            <p className="font-semibold">
              Produk <span className="italic">{hasil.produk.nama_produk}</span>{" "}
              tersedia dengan harga{" "}
              <span className="font-bold">
                Rp{hasil.produk.harga.toLocaleString("id-ID")}
              </span>
              .
            </p>
            <p>Stok tersedia: {hasil.produk.stok}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00-.15.7v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-.15-.7L17 13M7 13V6a1 1 0 011-1h10"
            />
          </svg>
        </div>
      )}

      {hasil && hasil.status === "outofstock" && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative flex items-center space-x-4">
          <div className="text-3xl">⚠️</div>
          <div>
            <p className="font-semibold">
              Produk <span className="italic">{hasil.produk.nama_produk}</span>{" "}
              saat ini sedang habis.
            </p>
            <p className="text-red-600 font-bold">Out of Stock</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-yellow-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m6 6a9 9 0 11-6-15.36"
            />
          </svg>
        </div>
      )}

      {hasil && hasil.status === "notfound" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center space-x-4">
          <div className="text-3xl">❌</div>
          <div>
            <p className="font-semibold">Kode produk tidak ditemukan.</p>
          </div>
        </div>
      )}
    </div>
  );
}
