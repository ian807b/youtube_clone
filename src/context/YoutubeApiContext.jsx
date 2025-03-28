import { createContext, useContext } from 'react';
import YoutubeClient from '../api/youtubeClient.js';
import Youtube from '../api/youtube.js';

// eslint-disable-next-line react-refresh/only-export-components
export const YoutubeApiContext = createContext(undefined);

const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider
      value={{
        youtube,
      }}
    >
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
