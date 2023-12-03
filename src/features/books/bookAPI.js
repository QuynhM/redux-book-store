import api from "../../apiService.js";

export const fetchBooks = async ({ page, query }) => {
  try {
    let url = `/books?page=${page}`;

    if (query) {
      url += `&query=${query}`;
    }

    const res = await api.get(url);
    return res;
  } catch (error) {
    return error;
  }
};
