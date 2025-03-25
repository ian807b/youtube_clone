import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import MockYoutubeClient from "../api/mockYoutubeClient";
import YoutubeClient from "../api/youtubeClient";

const YoutubeApiContext = createContext();

// const client = new MockYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
