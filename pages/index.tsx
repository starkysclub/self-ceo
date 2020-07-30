import { withTranslation } from '../i18n';
import { NextPage } from 'next';
import { WithTranslation } from 'next-i18next';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Download from '../components/Download';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface HompeageProps extends WithTranslation {}

const Homepage: NextPage<HompeageProps> = () => {
  return (
    <>
      <main>
        <Navigation />
        <Hero />
        <About />
        <Download />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default withTranslation('common')(Homepage);
