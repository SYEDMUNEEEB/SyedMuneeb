import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { TailSpin } from 'react-loader-spinner';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          <Header />
          <div className="flex justify-center items-center h-screen">
            <TailSpin
              color="#4B5563"
              height={100}
              width={100}
            />
          </div>
        </>
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <Projects />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
