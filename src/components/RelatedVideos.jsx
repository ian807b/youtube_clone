import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext.jsx";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard.jsx";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const {
    error,
    isLoading,
    data: videos,
  } = useQuery({
    queryKey: ["related", id],
    queryFn: () => {
      return youtube.relatedVideos(id);
    },
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong!</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={`${video.id}`} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
