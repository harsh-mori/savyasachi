import SEO from '../../components/common/SEO';
import { seoData, organizationSchema, localBusinessSchema, websiteSchema } from '../../content/seoData';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import FacilitiesSection from './FacilitiesSection';
import ClientsSection from './ClientsSection';
import '../SharedPage.css';

const Home = () => {
    return (
        <div className="home-new">
            <SEO
                title={seoData.home.title}
                description={seoData.home.description}
                keywords={seoData.home.keywords}
                canonicalUrl={seoData.home.canonicalUrl}
                ogImage={seoData.home.ogImage}
                structuredData={[organizationSchema, localBusinessSchema, websiteSchema]}
            />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <FacilitiesSection />
            <ClientsSection />
        </div>
    );
};

export default Home;


