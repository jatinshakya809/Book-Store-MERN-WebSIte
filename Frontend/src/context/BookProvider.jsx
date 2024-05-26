import React, { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [bookId, setBookId] = useState({
    id: "",
  });

  return (
    <BookContext.Provider value={[bookId, setBookId]}>
      {children}
    </BookContext.Provider>
  );
};

export { BookProvider };
