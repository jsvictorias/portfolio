import { useLanguage } from "../../../context/LanguageContext";
import { filterMessages } from "./texts";

export interface Category {
    id: string;
    label: string;
}

export const useCategories = (): Category[] => {
    const { getT } = useLanguage();
    const t = getT(filterMessages);

    return [
        { id: '1', label: t("design") },
        { id: '2', label: t("frontend") },
        { id: '3', label: t("quantica") },
        { id: '4', label: t("machine") },
    ];
};
