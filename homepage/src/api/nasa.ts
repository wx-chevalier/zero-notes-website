/** 接口调用 */
import axios from 'axios';

const NASA_TOKEN = 'w6jzHY3BWbVrO74WT7ZztIGvH7SF83N8xvRBIfeq';

export async function getApod() {
  const resp = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${NASA_TOKEN}`
  );

  console.log(resp);
}
