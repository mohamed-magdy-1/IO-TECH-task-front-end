'use client'

import React from 'react'

export default function NotFound() {
  const handleGoHome = () => {
    window.location.href = '/'
  }

  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
   
      <h1 className="text-8xl md:text-9xl font-bold text-amber-800 mb-4">
        404
      </h1>

   
      <div className="mb-8 max-w-lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
          الصفحة غير موجودة
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو قد تم نقلها إلى مكان آخر
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleGoHome}
          className="flex items-center justify-center gap-3 px-6 py-3 bg-amber-800 text-white font-medium rounded-lg hover:bg-amber-900 transition-colors duration-200"
        >
          <span className="text-lg">🏠</span>
          العودة للرئيسية
        </button>
        
        <button
          onClick={handleGoBack}
          className="flex items-center justify-center gap-3 px-6 py-3 bg-white text-amber-800 font-medium rounded-lg border-2 border-amber-800 hover:bg-amber-50 transition-colors duration-200"
        >
          <span className="text-lg">←</span>
          الصفحة السابقة
        </button>
      </div>

  
      <div className="mt-12 w-16 h-1 bg-amber-800 rounded"></div>
    </div>
  )
}