import type { Translations } from "./utils.ts";

export const translations = {
  "nav.home": {
    en: "Home",
    ja: "ホーム",
  },
  "nav.demo": {
    en: "Demo",
    ja: "デモ",
  },
  "footer.home": {
    en: "Home",
    ja: "ホーム",
  },
  "footer.demo": {
    en: "Demo",
    ja: "デモ",
  },
  "skip.link": {
    en: "Skip to main content",
    ja: "メインコンテンツにスキップ",
  },
  "dark.mode.toggle": {
    en: "Toggle dark mode",
    ja: "ダークモードを切り替える",
  },
  "hero.slogan1": {
    en: "Build your own",
    ja: "ギルドキットで",
  },
  "hero.slogan2": {
    en: "Job Portal",
    ja: "転職サイト",
  },
  "hero.slogan3": {
    en: "",
    ja: "を作ろう",
  },
  "hero.watch-github": {
    en: "Watch on GitHub",
    ja: "GitHub で watch",
  },
  "hero.coming-soon": {
    en: "Coming soon",
    ja: "近日公開予定",
  },
} as const satisfies Translations;
