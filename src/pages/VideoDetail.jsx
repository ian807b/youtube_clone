import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const { videoId } = useParams();
  const { state } = useLocation();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: video,
  } = useQuery({
    queryKey: ["video", videoId],
    queryFn: () => youtube.getVideoById(videoId),
    initialData: () => state?.video,
  });

  return (
    <section className="flex flex-col lg:flex-row">
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong!</p>}
      {video && (
        <>
          <article className="basis-4/6">
            <iframe
              id="player"
              width="100%"
              height="640"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={video.snippet.title}
              allowFullScreen
            />
            <div className="p-8">
              <h2 className="text-xl font-bold">{video.snippet.title}</h2>
              <ChannelInfo
                id={video.snippet.channelId}
                name={video.snippet.channelTitle}
              />
              <pre className="whitespace-pre-wrap">
                {video.snippet.description}
              </pre>
            </div>
          </article>
          <section className="basis-2/6">
            <RelatedVideos id={videoId} />
          </section>
        </>
      )}
    </section>
  );
}
