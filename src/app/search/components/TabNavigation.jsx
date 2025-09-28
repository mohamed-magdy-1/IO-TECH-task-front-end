"use client"
import React from "react";
import { FiSettings, FiUser } from "react-icons/fi";

export default function TabNavigation({ 
  activeTab, 
  setActiveTab, 
  serviceResults, 
  teamResults, 
  serviceMeta, 
  teamMeta, 
  isRTL 
}) {
  return (
    <div className="flex justify-center mb-6">
      <div className="bg-white flex gap-2.5 rounded-xl shadow-md p-2 border border-gray-100">
        <button
          onClick={() => setActiveTab('services')}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
            activeTab === 'services'
              ? 'bg-[#4B2615] text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <FiSettings className="w-5 h-5" />
          {isRTL ? 'الخدمات' : 'Services'}
          {serviceResults.length > 0 && (
            <span className={`px-2 py-1 rounded-full text-xs ${
              activeTab === 'services' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
            }`}>
              {serviceMeta?.pagination?.total || serviceResults.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('team')}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
            activeTab === 'team'
              ? 'bg-[#4B2615] text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <FiUser className="w-5 h-5" />
          {isRTL ? 'الفريق' : 'Team'}
          {teamResults.length > 0 && (
            <span className={`px-2 py-1 rounded-full text-xs ${
              activeTab === 'team' ? 'bg-white/20 text-white' : 'bg-green-100 text-green-800'
            }`}>
              {teamMeta?.pagination?.total || teamResults.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}