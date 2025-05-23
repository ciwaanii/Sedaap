export default function Loading() {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 animate-fadeIn">
        {/* Spinner kotak dinamis */}
        <div className="w-24 h-24 relative mb-6">
          <div className="absolute w-5 h-5 bg-purple-400 top-0 left-1/2 transform -translate-x-1/2 rounded shadow-xl animate-spinner-box"></div>
          <div className="absolute w-5 h-5 bg-purple-500 right-0 top-1/2 transform -translate-y-1/2 rounded shadow-xl animate-spinner-box delay-100"></div>
          <div className="absolute w-5 h-5 bg-purple-600 bottom-0 left-1/2 transform -translate-x-1/2 rounded shadow-xl animate-spinner-box delay-200"></div>
          <div className="absolute w-5 h-5 bg-purple-700 left-0 top-1/2 transform -translate-y-1/2 rounded shadow-xl animate-spinner-box delay-300"></div>
        </div>
  
        {/* Teks Loading */}
        <p className="text-xl font-bold tracking-wide text-white">
          <span className="animate-glow bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 bg-clip-text text-transparent">
            Memuat Sistem
          </span>
          <span className="animate-blink ml-1 text-purple-300">...</span>
        </p>
      </div>
    );
  }