// src/context/LanguageContext.tsx
import React, { 
    createContext, 
    useState, 
    useContext, 
    ReactNode, 
    useCallback 
} from 'react';

// Define os tipos globais
export type Language = 'pt' | 'en'; 

// Define a estrutura que será exposta pelo Contexto
interface LanguageContextType {
    currentLanguage: Language;
    // O toggleLanguage é o que seu switch chama
    toggleLanguage: () => void; 
    // Função universal para traduzir, que aceita o objeto de textos da página
    getT: (messages: Record<Language, any>) => (key: string) => string;
}

// Cria o Contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// O Provider será responsável por armazenar e alterar o estado
interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    // ESTADO CENTRALIZADO (Vindo do seu useLanguageSwitch original)
    const [currentLanguage, setCurrentLanguage] = useState<Language>('pt');

    const toggleLanguage = () => {
        setCurrentLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
        // Opcional: Persistir no localStorage
    };
    
    // Função de Tradução (Customizada)
    const getT = useCallback(
        // 'messages' é o seu 'descriptionMessages' importado
        (messages: Record<Language, any>) => (key: string): string => {
            // Retorna o texto para o idioma atual
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

// Hook customizado para CONSUMIR o Contexto
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
    }
    return context;
};