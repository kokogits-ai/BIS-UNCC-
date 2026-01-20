
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Verify from './pages/Verify';
import Confirmation from './pages/Confirmation';
import { Page, VerificationFormData } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<Page>(Page.HOME);
  const [verifiedUser, setVerifiedUser] = React.useState<string>('');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVerificationSuccess = (data: VerificationFormData) => {
    setVerifiedUser(data.fullName);
    setCurrentPage(Page.CONFIRMATION);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === Page.HOME && (
            <Home key="home" onStart={() => handleNavigate('verify')} />
          )}
          {currentPage === Page.VERIFY && (
            <Verify key="verify" onSuccess={handleVerificationSuccess} />
          )}
          {currentPage === Page.CONFIRMATION && (
            <Confirmation key="confirmation" fullName={verifiedUser} onHome={() => handleNavigate('home')} />
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
