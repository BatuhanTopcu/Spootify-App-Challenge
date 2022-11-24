import React from 'react';
import LoadingBar from '../../common/components/LoadingBar';
import Title from '../../common/components/Title';
import DiscoverBlock from '../Discover/components/DiscoverBlock';
import SearchInput from './components/SearchInput';
import useSearch from './useSearch';
import './_search.scss';

export default function Search() {
  const { search, handleSearch, results, loading, clearSearch } = useSearch();
  return (
    <div className="search-page">
      <Title>SEARCH</Title>
      <SearchInput value={search} onChange={handleSearch} clear={clearSearch} />
      {loading && (
        <div className="search-page__loading">
          <LoadingBar />
        </div>
      )}
      {results && !loading && (
        <>
          {results.tracks.length > 0 && (
            <DiscoverBlock text="TRACKS" id="tracks" data={results.tracks} />
          )}
          {results.albums.length > 0 && (
            <DiscoverBlock text="ALBUMS" id="albums" data={results.albums} />
          )}
          {results.artists.length > 0 && (
            <DiscoverBlock text="ARTISTS" id="artists" data={results.artists} />
          )}
          {results.playlists.length > 0 && (
            <DiscoverBlock text="PLAYLISTS" id="playlists" data={results.playlists} />
          )}
        </>
      )}
    </div>
  );
}
