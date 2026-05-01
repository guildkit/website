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

  // Temporary until 2026.9.4 IT Trend EXPO
  "hero.expo.text1": {
    en: "Join us for an online exhibition ",
    ja: "2026年9月1日 (火) 〜 9月4日 (金) に開催されるオンライン展示会「",
  },
  "hero.expo.linktext": {
    en: "IT Trend EXPO",
    ja: "IT トレンド EXPO",
  },
  "hero.expo.text2": {
    en: " held at Sep 1-4, 2026. (in Japanese)",
    ja: "」に出展します。",
  },
  "hero.expo.registration": {
    en: "Join IT Trend EXPO",
    ja: "参加登録",
  },
} as const satisfies Translations;
