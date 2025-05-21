import axios from "axios";

// entry-server.jsx or a separate file
export async function fetchNewsData(id) {
  const response = await axios.get(`https://infogujarat.in/api/news_details/1/${id}`);
  const data = response.data.data;

  return {
    title: data.title,
    image: data.blog_image[0]?.details || '',
    // desc: data.description, // Optional
  };
}
