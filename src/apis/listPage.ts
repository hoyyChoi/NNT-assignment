import { getData } from ".";
import { getWineListType } from "../types";

//wine list
export const getWineList = async (subcategory: string, page: number) => {
	const response = await getData<getWineListType>(`wines?subcategory=${subcategory}&page=${page}`);
	return response.data;
};
