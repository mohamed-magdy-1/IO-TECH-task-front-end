"use client"
import React from "react";

export default function SearchSummary({ 
  query, 
  serviceResults, 
  teamResults, 
  serviceMeta, 
  teamMeta, 
  isRTL 
}) {

  if (!query.trim() || (serviceResults.length === 0 && teamResults.length === 0)) {
    return null;
  }

  return (
    <div className="mt-8 text-center">
      <div className="inline-flex items-center gap-4 bg-white rounded-xl shadow-md px-6 py-4 border border-gray-100">
        <span className="text-gray-600">
          {isRTL ? "إجمالي النتائج:" : "Total Results:"}
        </span>
        <div className="flex items-center gap-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {serviceMeta?.pagination?.total || 0} {isRTL ? "خدمة" : "Services"}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {teamMeta?.pagination?.total || 0} {isRTL ? "عضو فريق" : "Team Members"}
          </span>
        </div>
      </div>
    </div>
  );
}