import axiosClient from "../axiosClient";
import { httpProxy } from "../../env";


export const SearchbyName = async (string) => {
  try {
    if (typeof string !== "string") {
      return;
    }
    const stringQuery = string.trim();
    const response = await axiosClient.get(
      `${httpProxy}fetch/http://ac.mp3.zing.vn/complete?type=artist,song,key,code&num=500&query=${stringQuery}`
    );
  
    return response.data
    // dispath(addSearchList(response.data));
  } catch (error) {
    throw error
  }
};
