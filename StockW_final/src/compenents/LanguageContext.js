import React from 'react';

export const LanguageContext = React.createContext({
  language: 'en',
  switchLanguage: () => {},
});


export default LanguageContext;