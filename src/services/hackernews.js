const API_KEY = 'b91f17f1bd93477aaa2f820ba69b21af';

class HackerNewsService {

  async getHackerNews() {
    const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey='+API_KEY;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`HackerNewsService getHackerNews failed, HTTP status ${response.status}`);
    }
    const data = await response.json();
    return data.articles
  }
  
}

export default new HackerNewsService();