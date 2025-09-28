
import ClientsComments from "./home/ClientsComments/ClientsComments";
import HeroSection from "./home/HeroSection/heroSection";
import OurTeam from "./home/OurTeam/ourTeam";

export default function Home({searchParams}) {
  const language = searchParams?.lang || 'en'
  return (
    <div>
      <HeroSection language={language} />
      <OurTeam language={language} />
      <ClientsComments  language={language} />
    </div>
  );
}
