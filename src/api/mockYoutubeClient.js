import axios from 'axios';

export default class MockYoutubeClient {
  async search() {
    return axios.get('/videos/search.json');
  }

  async videos(params) {
    if (params && params.params && params.params.id) {
      return axios.get('/videos/channel.json');
    }
    return axios.get('/videos/popular.json');
  }

  async channels() {
    return axios.get('/videos/channel.json');
  }
}
