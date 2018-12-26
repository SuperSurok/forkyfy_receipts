import { elements } from "./base";

export const toggleLikeBtn = isLiked => {
  const iconString = isLiked ? "icon-heart" : "icon-heart-outline";
  document
    .querySelector(".recipe__love use")
    .setAttribute("href", `img/icons.svg#${iconString}`);
};
