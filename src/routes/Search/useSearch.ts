import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import spotifyService from '../../api/spotifyService';
import { Artist, Playlist, Album, CustomTrack } from '../../types/spotifyTypes';
import { useDebouncedParams } from '../../utils/hooks';

type ResultState = {
  tracks: CustomTrack[];
  artists: Artist[];
  playlists: Playlist[];
  albums: Album[];
} | null;

const useSearch = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') ?? '');
  useDebouncedParams(search, 'q', 750);
  const [results, setResults] = useState<ResultState>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const resetState = () => {
    setResults(null);
    setLoading(false);
  };

  const clearSearch = () => {
    setSearch('');
  };

  useEffect(() => {
    setLoading(true);
    const q = searchParams.get('q') ?? '';
    if (q.length > 0) {
      try {
        spotifyService.Search(searchParams.get('q') ?? '').then((res) => {
          setResults({
            ...res,
          });
          setLoading(false);
        });
      } catch (error) {
        console.error(error);
        resetState();
      }
    } else {
      resetState();
    }
  }, [searchParams]);

  return { search, handleSearch, results, loading, clearSearch };
};

export default useSearch;
