import React from "react";

function ResponsiveText() {
  return (
    <div className="mb-8">
      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
        Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan layar.
        <br />
        Coba juga class yang menggunakan prefix breakpoint (md:xx, lg:xx, xl:xx) dan lihat perubahannya.
      </p>
    </div>
  );
}

function ResponsiveWidth() {
  return (
    <div className="mb-8">
      <p className="mb-4">
        Coba lakukan "zoom in/zoom out" atau ubah ukuran layar. Perhatikan bagaimana elemen berubah.
        <br />
        <strong>md:w-1/2</strong> = Saat layar mencapai ukuran <strong>tablet</strong> (md: 768px) akan membagi lebar jadi 2 kolom.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-blue-300 w-full md:w-1/2 p-4">Kolom 1</div>
        <div className="bg-blue-400 w-full md:w-1/2 p-4">Kolom 2</div>
      </div>
    </div>
  );
}

function ResponsiveLayout() {
  return (
    <div className="mb-8">
      <p className="mb-4">
        Kotak-kotak di bawah ini menggunakan <strong>Grid Layout</strong> dari Tailwind.
        <br />
        <strong>grid-cols-1</strong> = Tampil 1 kolom pada layar kecil.
        <br />
        <strong>md:grid-cols-2</strong> = Jadi 2 kolom di layar sedang (768px+)
        <br />
        <strong>lg:grid-cols-4</strong> = Jadi 4 kolom di layar besar (1024px+)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-200 p-4">📦 Box 1</div>
        <div className="bg-gray-200 p-4">📦 Box 2</div>
        <div className="bg-gray-200 p-4">📦 Box 3</div>
        <div className="bg-gray-200 p-4">📦 Box 4</div>
      </div>
    </div>
  );
}

export default function ResponsiveDemo() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Demo Responsif Tailwind</h1>
      <ResponsiveText />
      <ResponsiveWidth />
      <ResponsiveLayout />
    </div>
  );
}