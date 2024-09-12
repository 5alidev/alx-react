import { Map, List } from "immutable";

export const concatElements = (page1, page2) => {
  const map1 = Map(page1);
  const map2 = Map(page2);

  return map1.concat(map2);
};

export const mergeElements = (page1, page2) => {
  const map1 = List(page1);
  const map2 = List(page2);

  return map1.merge(map2);
};
