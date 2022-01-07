import { atom } from "recoil";

// Menu overlay
export const menuOpenState = atom<boolean>({
  key: "menuOpenState",
  default: false,
});

export const topbarHeightState = atom<number>({
  key: "topbarHeightState",
  default: 0,
});

// If locked => scrollbar width, `false` otherwise
export const scrollLockState = atom<undefined | string>({
  key: "scrollLockState",
  default: undefined,
  effects_UNSTABLE: [
    ({ setSelf, trigger }) => {
      if (typeof MutationObserver !== "undefined" && trigger === "get") {
        const observer = new MutationObserver(function (mutations) {
          mutations.forEach(function ({ target }) {
            const paddingRight = (target as HTMLHtmlElement).style.paddingRight;
            setSelf(
              paddingRight &&
                (target as HTMLHtmlElement).style.overflow === "hidden"
                ? paddingRight
                : undefined
            );
          });
        });

        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["style"],
        });
      }
    },
  ],
});
