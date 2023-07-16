
import styles from './Footer.css';
import logo from '../images/linkedin_banner_image_1.png';

import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Footer = () => {
    const { language } = useContext(LanguageContext);
    const { switchLanguage } = useContext(LanguageContext);
    const translations = {
        en: {
            company: 'COMPANY',
            city: 'City: New York, NY',
            employees: 'Number of employees: 2500',
            founded: 'Founded: 2005',
            contact: 'CONTACT',
            email: 'StockW@gmail.com',
            address: '123 Main St',
            hours: 'Mon-Fri, 9am-5pm',
            languages: 'Languages',
            english: 'English',
            french: 'French',
            rights: '©2023 StockW. All Rights Reserved.',
        },
        fr: {
            company: 'ENTREPRISE',
            city: 'Ville : New York, NY',
            employees: 'Nombre d\'employés : 2500',
            founded: 'Fondée : 2005',
            contact: 'CONTACTEZ-NOUS',
            email: 'StockW@gmail.com',
            address: '123, rue Principale',
            hours: 'Lun-Ven, 9h-17h',
            languages: 'Langues',
            english: 'Anglais',
            french: 'Français',
            rights: '©2023 StockW. Tous droits réservés.',
        },
    };

    return (
        <div className="footer">
            <div className="columns">
                <div className="column-2">
                    <div className="logo-wrapper">
                        <img
                            src={logo}
                            loading="lazy"
                            width="178"
                            height="40"
                            alt=""
                            className="logo"
                        />
                    </div>
                </div>
                <div className="small-columns">
                    <div className="column-3">
                        <div className="content">
                            <div className="text-2">{translations[language].company}</div>
                            <div className="footer-links">
                                <div className="link">{translations[language].city}</div>
                                <div className="link">{translations[language].employees}</div>
                                <div className="link">{translations[language].founded}</div>
                            </div>
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="content">
                            <div className="text-2">{translations[language].contact}</div>
                            <div className="footer-links">
                                <div className="link">{translations[language].email}</div>
                                <div className="link">{translations[language].address}</div>
                                <div className="link">{translations[language].hours}</div>
                            </div>
                        </div>
                    </div>
                    <div className="column-3">
                        <div className="content">
                            <div className="text-2">{translations[language].languages}</div>
                            <div className="footer-links">
                                <button onClick={() => switchLanguage('en')}>English</button>
                                <button onClick={() => switchLanguage('fr')}>French</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="text-3">{translations[language].rights}</div>
            </div>
        </div>
    );
};

export default Footer;
