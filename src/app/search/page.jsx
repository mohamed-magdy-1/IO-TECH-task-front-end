"use client"
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { fetchServicesSearch, fetchTeamSearch } from "../featchData/api";

// Import Components
import HeroSearchSection from "./components/HeroSearchSection";
import TabNavigation from "./components/TabNavigation";
import ServicesResults from "./components/ServicesResults";
import TeamResults from "./components/TeamResults";
import SearchSummary from "./components/SearchSummary";

export default function SearchPage() {
  const language = useSelector(state => state.app.language);
  const input = useSelector(state => state.app.searchQuery);
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;
  
  const [query, setQuery] = useState(input);
  const [teamResults, setTeamResults] = useState([]);
  const [serviceResults, setServiceResults] = useState([]);
  const [teamMeta, setTeamMeta] = useState(null);
  const [serviceMeta, setServiceMeta] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('services'); 

  const isRTL = language !== "en";


  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const handleSearch = async () => {
        if (!query.trim()) {
          setTeamResults([]);
          setServiceResults([]);
          setTeamMeta(null);
          setServiceMeta(null);
          return;
        }

        setIsLoading(true);
        try {
          if (activeTab === 'services') {
            const serviceRes = await fetchServicesSearch(query, currentPage);
            setServiceResults(serviceRes.data);
            setServiceMeta(serviceRes.meta);
          } else {
            const teamRes = await fetchTeamSearch(query, currentPage);
            setTeamResults(teamRes.data);
            setTeamMeta(teamRes.meta);
          }
        } catch (err) {
          console.error("Error fetching search data", err);
        } finally {
          setIsLoading(false);
        }
      };

      handleSearch();
    }, 200);

    return () => clearTimeout(delayDebounce);
  }, [query, currentPage, activeTab]);

  return (
    <section className="min-h-screen bg-gray-50">
 
      <HeroSearchSection
        query={query}
        setQuery={setQuery}
        isLoading={isLoading}
        isRTL={isRTL}
      />


      <div 
        style={{direction: isRTL ? "rtl" : "ltr"}} 
        className="container mx-auto px-4 py-12 max-w-6xl"
      >
   
        {query.trim() && (
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              {isRTL 
                ? `نتائج البحث عن: "${query}"` 
                : `Search results for: "${query}"`
              }
            </p>
          </div>
        )}


        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          serviceResults={serviceResults}
          teamResults={teamResults}
          serviceMeta={serviceMeta}
          teamMeta={teamMeta}
          isRTL={isRTL}
        />

        {/* Results Content */}
        <div className="grid md:grid-cols-1 gap-8">
          {activeTab === 'services' ? (
            <ServicesResults
              serviceResults={serviceResults}
              serviceMeta={serviceMeta}
              isLoading={isLoading}
              query={query}
              isRTL={isRTL}
            />
          ) : (
            <TeamResults
              teamResults={teamResults}
              teamMeta={teamMeta}
              isLoading={isLoading}
              query={query}
              isRTL={isRTL}
            />
          )}
        </div>

    
        <SearchSummary
          query={query}
          serviceResults={serviceResults}
          teamResults={teamResults}
          serviceMeta={serviceMeta}
          teamMeta={teamMeta}
          isRTL={isRTL}
        />
      </div>
    </section>
  );
}