import Footer from 'src/components/Footer';
import Header from 'src/components/Header/Header';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
