type FetcherResponse<T> = Promise<T>;

const fetcher = async <T,>(
  ...args: Parameters<typeof fetch>
): FetcherResponse<T> => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export default fetcher;
