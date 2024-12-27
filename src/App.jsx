
import './App.css';
// import {  useTransition } from 'react';
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next';
// import { changeLanguage } from 'i18next';
import i18n from './locales/i18n';

function App() {
  const array = ['한국어', '영어', '중국어'];
  
  const [ t, i18n ] = useTranslation();

  const handleLanguageChange = (lang) => {
    const languageMap = {
      한국어: 'ko',
      영어: 'en',
      중국어: 'ch',
    }
    i18n.changeLanguage(languageMap[lang]);
  };
  
  console.log()

  return (
    <div className="container">
      <div className="button__wrap">
        {array.map((lang, index) => (
          <Button key={index} onClick = {() => handleLanguageChange(lang)}>
            {lang}
          </Button>
        ))}
    
      </div>
      <div className="content">
        <div className="text">
          {t("main")}
        </div>
      </div>
    </div>
  );
}

export default App;