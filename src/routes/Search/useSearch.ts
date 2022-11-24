import { useState, useEffect } from 'react';
import spotifyService from '../../api/spotifyService';
import { Artist, Playlist, Album, CustomTrack } from '../../types/spotifyTypes';
import { useDebounce } from '../../utils/hooks';

type ResultState = {
  tracks: CustomTrack[];
  artists: Artist[];
  playlists: Playlist[];
  albums: Album[];
} | null;

const useSearch = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
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
    if (debouncedSearch.length > 0) {
      try {
        spotifyService.Search(debouncedSearch).then((res) => {
          setResults({
            tracks: res.tracks.items,
            artists: res.artists.items,
            playlists: res.playlists.items,
            albums: res.albums.items,
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
  }, [debouncedSearch]);

  return { search, handleSearch, results, loading, clearSearch };
};

export default useSearch;
