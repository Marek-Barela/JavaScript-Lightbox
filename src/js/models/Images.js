import axios from "axios";

class Images {
  async getImages() {
    const url = "https://api.myjson.com/bins/8zgn1";
    try {
      const res = await axios(url);
      this.result = res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default Images;
