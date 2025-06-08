export const BASE_URL = "https://jsonplaceholder.typicode.com";
export enum Paths {
  TODOS = "todos",
}
const PAGINATION_LIMIT = 20;

const pagination = (page?: number) =>
  page ? `?_page=${page}&_limit=${PAGINATION_LIMIT}` : "";

export const buildUrl = ({
  path,
  params,
  page,
}: {
  path: Paths;
  params?: string;
  page?: number;
}) => `${BASE_URL}/${path}${params ? `/${params}` : ""}${pagination(page)}`;
