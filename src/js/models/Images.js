import axios from "axios";

class Images {
  async getImages() {
    const url = "https://api.myjson.com/bins/6xsmt";
    try {
      const res = await axios(url).then(res => res.data);
      this.result = res.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default Images;
