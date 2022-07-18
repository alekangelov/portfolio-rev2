import type { MediumItem } from "@types";

const RSS2JSON_URL = "https://api.rss2json.com/v1/api.json?rss_url=";
const MEDIUM_URL = "https://medium.com/feed/@alekangelov";

const MEDIUM_JSON_URL = RSS2JSON_URL + MEDIUM_URL;

export const getMediumPosts = async () => {
  return fetch(MEDIUM_JSON_URL)
    .then((e) => e.json())
    .then((e) => e.items as MediumItem[]);
};
