import {CategoriesType, MealsType} from '../types';

// const BASE_URL = 'http//www.themealdb.com/api/json/v1/1/';
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);

  try {
    // may error if there is no body
    response.parsedBody = await response.json();
  } catch (ex) {
    // Handle error here
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

async function get<T>(path: string): Promise<HttpResponse<T>> {
  return http<T>(`${BASE_URL}${path}`);
}

export type Categories = CategoriesType[];
export type Meals = MealsType[];

const getCategories = async () => get<Categories>(`categories.php`);

const getMeals = async (payload: string) =>
  get<Meals>(`filter.php?c=${payload}`);

export const api = {
  getCategories,
  getMeals,
};
