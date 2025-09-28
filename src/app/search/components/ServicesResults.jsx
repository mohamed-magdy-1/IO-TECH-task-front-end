"use client"
import React from "react";
import { FiSettings } from "react-icons/fi";
import Pagination from "../../components/pagination/pagination";

export default function ServicesResults({ 
  serviceResults, 
  serviceMeta, 
  isLoading, 
  query, 
  isRTL 
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 rounded-xl">
          <FiSettings className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          {isRTL ? "الخدمات" : "Services"}
        </h2>
        {serviceMeta?.pagination?.total > 0 && (
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {serviceMeta.pagination.total} {isRTL ? "نتيجة" : "results"}
          </span>
        )}
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : serviceResults.length > 0 ? (
        <>
          <div className="space-y-4">
            {serviceResults.map(service => (
              <div 
                key={service.id} 
                className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
              >
                <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
                {service.description && (
                  <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
                )}
              </div>
            ))}
          </div>
          {serviceMeta && <Pagination meta={serviceMeta} />}
        </>
      ) : query.trim() ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiSettings className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-500">
            {isRTL ? "لا توجد خدمات مطابقة" : "No services found"}
          </p>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400">
            {isRTL ? "ابدأ البحث لرؤية الخدمات" : "Start searching to see services"}
          </p>
        </div>
      )}
    </div>
  );
}