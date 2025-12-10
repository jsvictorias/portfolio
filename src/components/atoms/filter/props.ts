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
        { id: 'design', label: t("design") },
        { id: 'frontend', label: t("frontend") },
        { id: 'mobile', label: t("mobile") },
        { id: 'quantica', label: t("quantica") },
        { id: 'machine', label: t("machine") },
    ];
};