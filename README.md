# Spootify App Challenge

### Main Tasks

- [x] Display "Released This Week" songs
- [x] Display "Featured Playlists"
- [x] Display "Browse genres"
- [x] Fixed any types
- [x] App dockerized
- [x] All #TODOs done

### Custom Features

- Custom ESLint rules
- Routing
- Search route and feature
- DiscoverBlock made clickable for tracks, playlists, albums and artists
- Added custom routes for tracks, playlists, albums and artists (accessible via homepage and search)

### Environment

Spotify secrets required in .env file

    REACT_APP_SPOTIFY_CLIENT_ID=
    REACT_APP_SPOTIFY_CLIENT_SECRET=

### Available Scripts

- Install packages
  `npm run install`
- Run development mode
  `npm run start`
- Check linting
  `npm run lint`
- Check type errors
  `npm run tsc`
- Build docker container
  `docker build -t mvvm-app .`
- Run docker container
  `docker run -p 3000:80 mvvm-app`
