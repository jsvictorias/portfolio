import { useState, useEffect, useMemo } from 'react';
import { Article, Star } from './props';

const ITEMS_PER_PAGE = 3;

export const usePagination = (data: Article[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  
  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, data]);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (page: number) => setCurrentPage(page);

  return {
    currentPage,
    totalPages,
    currentArticles,
    nextPage,
    prevPage,
    goToPage
  };
};

export const useStars = (count: number = 15) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      sizeClass: Math.random() > 0.5 ? 'star-small' : 'star-medium'
    }));
    setStars(newStars);
  }, [count]);

  return stars;
};