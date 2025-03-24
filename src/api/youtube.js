import { v4 as uuidv4 } from 'uuid';

export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
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
      .then((items) =>
        items.map((item) => ({ ...item, id: item.id?.videoId ?? uuidv4() }))
      );
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
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => ({ ...item, id: item.id?.videoId ?? uuidv4() }))
      );
  }
}
