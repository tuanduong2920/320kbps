import axiosClient from "../axiosClient";

const YOUTUBE_API_CURL = "https://youtube.googleapis.com/youtube/v3";

export const SearchByName = async (string) => {
  try {
    const res = await axiosClient.get(
      `${YOUTUBE_API_CURL}/search?part=snippet&q=${string}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=50`
    );
    return res;
  } catch (error) {
    throw error;
  }
};
