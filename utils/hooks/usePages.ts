import { useState } from "react";

export const usePages = (maxPages = 0, initialValue = 0) => {
  const [page, setPage] = useState(initialValue);
  const onBack = () => {
    setPage((prevPage) => {
      if (prevPage > 0) {
        return prevPage - 1;
      }
      return prevPage;
    });
  };
  const onNext = () => {
    setPage((prevPage) => {
      if (prevPage < maxPages) {
        return prevPage + 1;
      }
      return prevPage;
    });
  };
  return { page, onBack, onNext };
};
