import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export function useDebouncedParams(value: string, queryKey: string, delay: number) {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchParams.get(queryKey) === value) return;
      const query = new URLSearchParams(searchParams);
      query.set(queryKey, value);
      console.log('set');
      setSearchParams(query);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
}
