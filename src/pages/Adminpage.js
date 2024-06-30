import React, { useState } from 'react';
import Header from '../components/common/Header';
import Movielist from '../components/admin/Movielist';
import Purchaselist from '../components/admin/Purchaselist';

const Adminpage = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  const handleNavigation = (page) => {
    setSelectedPage(page);
  };

  return (
    <div>
      <Header onNavigate={handleNavigation} />
      {selectedPage === 'home' && <Movielist />}
      {selectedPage === 'purchase' && <Purchaselist />}
    </div>
  );
};

export default Adminpage;
