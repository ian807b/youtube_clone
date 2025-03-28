import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext.jsx';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard.jsx';

function RelatedVideos({ video }) {
  const { youtube } = useYoutubeApi();
  const channelId = video.snippet.channelId;

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['related', channelId],
    queryFn: () => youtube.relatedVideos(channelId),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😑</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}

export default RelatedVideos;
