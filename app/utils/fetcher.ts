/**
 * Fetcher method for useSWR
 * @param url string (ex. "/api/ship/factions")
 * @returns data formatted in json
 */
export const fetcher = (url: string) => fetch(url).then((res) => res.json());
