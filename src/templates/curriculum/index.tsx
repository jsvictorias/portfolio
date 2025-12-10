import React, { useState, useMemo } from 'react';
import { CaretLeft, CaretRight, Calendar, BookOpen } from './constants';
import { articlesData } from './articles'; 
import { usePagination, useStars } from './helpers';
import { Article } from './props';
import './styles.css';

import { useLanguage } from '../../context/LanguageContext';
import { articleMessages } from './texts';

export const Curriculum = () => {
  const { getT } = useLanguage();
  const t = getT(articleMessages);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const allArticles = useMemo(() => {
    return Object.values(articlesData).flat() as Article[];
  }, []);
  
  const { 
    currentPage, 
    totalPages, 
    currentArticles, 
    nextPage, 
    prevPage, 
    goToPage 
  } = usePagination(allArticles);

  const stars = useStars(15);

  return (
    <div id="curriculum" className="curriculum-container">
      
      <div className="bg-effects">
        <div className="glow-blob glow-pink" />
        <div className="glow-blob glow-purple" />
        
        {stars.map((star) => (
          <div
            key={star.id}
            className={`star ${star.sizeClass}`}
            style={{ 
              left: star.left, 
              top: star.top, 
              animationDelay: star.delay
            }}
          />
        ))}
      </div>

      <div className="content-wrapper">
        
        <div className="header-section">
          <div className="title-container">
            <h1 className="main-title">
              {t('title')}
            </h1>
            <div className="title-underline" />
          </div>
        </div>

        <div className="articles-grid">
          {currentArticles.map((article) => {
            const translatedTitle = article.translationKey 
                ? t(article.translationKey) 
                : article.titulo;

            const descKey = article.translationKey ? `${article.translationKey}_desc` : '';
            const translatedDesc = (article.translationKey && t(descKey) !== descKey)
                ? t(descKey) 
                : article.descrição;

            return (
                <a 
                  href={article["link-github"]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  key={article.id}
                  onMouseEnter={() => setHoveredCard(article.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="article-card"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="card-hover-gradient" />

                  <div className="card-icon-wrapper">
                    <div className="icon-box">
                      <BookOpen />
                    </div>
                  </div>

                  <h3 className="card-title">
                    {translatedTitle}
                  </h3>
                  
                  <p className="card-excerpt">
                    {translatedDesc}
                  </p>

                  <div className="card-footer">
                    <div className="date-wrapper">
                      <Calendar />
                      <span>{article.date || "Recente"}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-pink-400 know-more">
                        {t('knowMore')} <CaretRight />
                    </div>
                  </div>
                </a>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="pagination-container">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="nav-btn"
            >
              <CaretLeft />
            </button>

            <div className="dots-wrapper">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToPage(idx + 1)}
                  className={`page-dot ${currentPage === idx + 1 ? 'active' : ''}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="nav-btn"
            >
              <CaretRight />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}