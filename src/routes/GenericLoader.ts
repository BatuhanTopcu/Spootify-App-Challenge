import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import spotifyService from '../api/spotifyService';
import { SpotifyDataType } from '../types/spotifyTypes';

type LoaderTypes = Exclude<SpotifyDataType, 'category'>;

const loaderPromises = {
  artist: spotifyService.GetArtist,
  track: spotifyService.GetTrack,
  playlist: spotifyService.GetPlaylist,
  album: spotifyService.GetAlbum,
};

type LoaderPromises = typeof loaderPromises;
type ReturnOfPromise<T extends LoaderTypes> = Awaited<ReturnType<LoaderPromises[T]>>;

export default function GenericLoader<T extends LoaderTypes>(type: T) {
  return async (args: LoaderFunctionArgs) => {
    const { id } = args.params;
    if (!id) {
      return redirect('/');
    }
    try {
      const data = await loaderPromises[type](id);
      return data as ReturnOfPromise<T>;
    } catch (_) {
      return redirect('/');
    }
  };
}
