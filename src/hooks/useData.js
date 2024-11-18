"use client";

import { useState, useEffect } from "react";

export function useData(url) {
    
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json);
          }
        })        
        .catch((error) => {
            if (!ignore) {
              setData(error.message);
            }});
            
      return () => {
        ignore = true;
      };
    }
  }, [url]); 
  
  return data;
}