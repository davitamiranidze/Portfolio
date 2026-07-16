import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Footer from "./components/layout/Footer";
import { Toaster } from "sonner";
import BackToTop from "./components/ui/BackToTop";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          classNames: {
            toast: "border border-zinc-200 bg-white text-black",
          },
        }}
      />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
