import { useTranslation } from "react-i18next";
import Languages from "./languages";
import { useEffect, useState } from "react";
// import logo from '@/shared/assets/accessibility-svgrepo-com.svg';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
        <div
          className={`flex w-full justify-between z-20 fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out ${isScrolled ? "bg-black h-16 items-center p-6" : "bg-transparent h-24 p-8"}`}
        >
          <div className="flex items-center ml-6">
            {/* <img className="w-12 h-12" src={logo} alt="logo"/> */}
          </div>
          <div className="flex gap-16 items-center text-white font-mono">
            <p className="cursor-pointer font-thin">{t("Home")}</p>
            <p className="cursor-pointer font-thin">{t("AboutMe")}</p>
            <p className="cursor-pointer font-thin">{t("Projects")}</p>
            <p className="cursor-pointer font-thin">{t("Skills")}</p>
            <p className="cursor-pointer font-thin">{t("Resume")}</p>
          </div>
          <div className="flex text-white">
            <Languages />
          </div>
        </div>
    </>
  );
};

export default Header;
