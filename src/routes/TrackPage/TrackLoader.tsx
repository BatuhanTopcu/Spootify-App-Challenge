import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import spotifyService from '../../api/spotifyService';
import { Track } from '../../types/spotifyTypes';

const TrackLoader: (args: LoaderFunctionArgs) => Promise<Track | Response> = async (args) => {
  const { id } = args.params;
  if (!id) {
    return redirect('/');
  }
  try {
    const data = await spotifyService.GetTrack(id);
    return data;
  } catch (_) {
    return redirect('/');
  }
};

export default TrackLoader;
