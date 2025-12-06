import React, { 
    createContext, 
    useState, 
    useContext, 
    ReactNode, 
    useCallback 
} from 'react';

export type Language = 'pt' | 'en'; 

interface LanguageContextType {
    currentLanguage: Language;
    toggleLanguage: () => void; 
    getT: (messages: Record<Language, any>) => (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState<Language>('pt');

    const toggleLanguage = () => {
        setCurrentLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
    };
    
    const getT = useCallback(
        (messages: Record<Language, any>) => (key: string): string => {
            return messages[currentLanguage]?.[key] || key; 
        },
        [currentLanguage]
    );

    return (
        <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, getT }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
    }
    return context;
};