import axios from "axios";
import { CLASSES_BASE_URL } from "@utils/api";

export const getAllClasses = async () => {
  const result = await axios.get(CLASSES_BASE_URL);

  if (result.status !== 200) {
    throw new Error("Failed to fetch classes");
  }

  return result.data.results;
};

export const getClassByIndex = async (index: string) => {
  console.log(`${CLASSES_BASE_URL}/${index}`);
  const result = await axios.get(`${CLASSES_BASE_URL}/${index}`);

  if (result.status !== 200) {
    throw new Error("Failed to fetch classes");
  }

  return result.data;
};
