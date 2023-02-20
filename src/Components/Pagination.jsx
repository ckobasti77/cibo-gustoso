import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);
  const pageCount = 5;

  const handlePageClick = debounce((pageNum) => {
    setActivePage(pageNum);
    window.scrollTo({
      top: (pageNum - 1) * window.innerHeight,
      behavior: 'smooth'
    });
  }, 100);

  useEffect(() => {
    const handleScroll = () => {
      const currentPage = Math.ceil(window.pageYOffset / window.innerHeight);
      setActivePage(currentPage + 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 px-7 py-[20%] flex flex-col gap-2 h-[100vh] bg-[#252525]/20">
      {Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i}
          className={`h-3 w-3 rounded-full ${activePage === i + 1 ? 'bg-black' : 'bg-gray-300'}`}
          onClick={() => handlePageClick(i + 1)}
        />
      ))}
    </div>
  );
};

export default Pagination;
