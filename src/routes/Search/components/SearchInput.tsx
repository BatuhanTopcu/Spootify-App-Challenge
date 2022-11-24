import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type SearchInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clear: () => void;
};

export default function SearchInput({ value, onChange, clear }: SearchInputProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for songs, albums, artists or playlists"
      />
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
      <FontAwesomeIcon className="delete-icon" onClick={clear} icon={faTrash} />
    </div>
  );
}
