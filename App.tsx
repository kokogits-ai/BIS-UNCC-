import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import FAQModal from './components/FAQModal.tsx';
import Home from './pages/Home.tsx';
import Verify from './pages/Verify.tsx';
import Confirmation from './pages/Confirmation.tsx';
import { Page, VerificationFormData } from './types.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [verifiedUser, setVerifiedUser] = useState<string>('');
  const [isFAQOpen, setIsFAQOpen] = useState<boolean>(false);

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
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onOpenFAQ={() => setIsFAQOpen(true)}
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

      <Footer onOpenFAQ={() => setIsFAQOpen(true)} />

      <FAQModal 
        isOpen={isFAQOpen} 
        onClose={() => setIsFAQOpen(false)} 
      />
    </div>
  );
};

export default App;