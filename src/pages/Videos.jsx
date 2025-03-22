import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import MockYoutube from '../api/mockYoutube';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => {
      const youtube = new MockYoutube();
      return youtube.search(keyword);
    },
  });

  return (
    <>
      <div>
        Videos {keyword ? `🔍${keyword}` : '🔥'}
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong!</p>}
        {videos && (
          <ul>
            {videos.map((video) => (
              <VideoCard key={`${video.id}`} video={video} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
