import logo from "../assets/logo.png";
import logoLight from '../assets/logoLight.png'


function HeroSection() {
  return (
    <section className="bg-[#778da9]  text-[#0d1b2a] dark:bg-[#0d1b2a] dark:text-[#778da9] p-15 text-center">
      <img className="w-16 h-16 rounded-full dark:hidden" src={logo} />
      <img className="w-16 h-16 rounded-full hidden dark:block" src={logoLight} />
      <h1 className="text-4xl font-bold mb-4">
        Turn Unused Software Licenses Into Cash
      </h1>
      <p className="text-lg mb-6">
        SoftSell helps businesses sell or value their extra software licenses in
        seconds.
      </p>
      <button className="bg-[#1b263b] text-[#e0e1dd] dark:bg-[#778da9]  font-semibold px-6 py-2 rounded">
        Get a Free Quote
      </button>
    </section>
  );
}

export default HeroSection;
