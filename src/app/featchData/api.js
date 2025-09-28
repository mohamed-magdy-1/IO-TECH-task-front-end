import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchHeader= (locale = 'en') => api.get(`/header?populate=LinkHeader&locale=${locale}`).then(res => res.data);
export const fetchFooter= (locale = 'en') => api.get(`/footer?populate=footerLinks&locale=${locale}`).then(res => res.data);
export const fetchHero = (locale = 'en') => api.get(`/home?populate=ContentHero.mainImage&locale=${locale}`).then(res => res.data);
export const fetchOurTeam = (locale = 'en') => api.get(`/our-team?locale=${locale}`).then(res => res.data);
export const fetchTeam = (locale = 'en') => api.get(`/teams?populate=ProfilePicture&locale=${locale}`).then(res => res.data);
export const fetchWhatOurClientsSay= (locale = 'en') => api.get(`/what-our-clients-say?locale=${locale}`).then(res => res.data);
export const fetchClients= (locale = 'en') => api.get(`/clients-says?populate=ClientsImg&locale=${locale}&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=10`).then(res => res.data);
export const fetchService= (locale = 'en',pageIndex = 1) => api.get(`/services?locale=${locale}&fields[0]=title&fields[1]=slug&sort=publishedAt:desc&pagination[page]=${pageIndex}&pagination[pageSize]=10`).then(res => res.data);
export const fetchServiceHeader= (locale = 'en') => api.get(`/services?locale=${locale}&fields[0]=title&fields[1]=slug&pagination[pageSize]=20`).then(res => res.data);

export const fetchTeamSearch = (search,currentPage) => api.get(`/teams?filters[$or][0][name][$containsi]=${search}&pagination[page]=${currentPage}&pagination[pageSize]=7&populate=*`).then(res => res.data)
export const fetchServicesSearch = (search,currentPage) => api.get(`/services?filters[$or][0][title][$containsi]=${search}&pagination[page]=${currentPage}&pagination[pageSize]=7&fields[0]=title&fields[1]=slug`).then(res => res.data)