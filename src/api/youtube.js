export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({
        params: {
          part: 'snippet',
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          id: id,
        },
      })
      .then((res) => res.data.items);
  }

  async getVideoById(videoId) {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet,contentDetails,statistics',
          id: videoId,
        },
      })
      .then((res) => res.data.items[0]);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          regionCode: 'CA',
          maxResults: 25,
        },
      })
      .then((res) => res.data.items);
  }
}
