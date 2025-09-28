"use client"
import React from "react";
import { FiUser } from "react-icons/fi";
import Pagination from "../../components/pagination/pagination";


export default function TeamResults({ 
  teamResults, 
  teamMeta, 
  isLoading, 
  query, 
  isRTL 
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-green-100 rounded-xl">
          <FiUser className="w-6 h-6 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          {isRTL ? "الفريق" : "Team Members"}
        </h2>
        {teamMeta?.pagination?.total > 0 && (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            {teamMeta.pagination.total} {isRTL ? "نتيجة" : "results"}
          </span>
        )}
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        </div>
      ) : teamResults.length > 0 ? (
        <>
          <div className="space-y-4">
            {teamResults.map(member => (
              <div 
                key={member.id} 
                className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  {member.image && (
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <FiUser className="w-5 h-5 text-green-600" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-800">{member.name}</h3>
                    {member.position && (
                      <p className="text-gray-600 text-sm">{member.position}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {teamMeta && <Pagination meta={teamMeta} />}
        </>
      ) : query.trim() ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiUser className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-500">
            {isRTL ? "لا يوجد أعضاء فريق مطابقين" : "No team members found"}
          </p>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400">
            {isRTL ? "ابدأ البحث لرؤية أعضاء الفريق" : "Start searching to see team members"}
          </p>
        </div>
      )}
    </div>
  );
}