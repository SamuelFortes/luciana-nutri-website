import Parser from "rss-parser";

const FEED_URL = "https://saude.abril.com.br/alimentacao/feed/";
const ARTICLE_COUNT = 3;

export type RecommendedArticle = {
  title: string;
  excerpt: string;
  link: string;
  sourceName: string;
  sourceDomain: string;
  faviconUrl: string;
};

function truncate(text: string, maxLength: number) {
  const clean = text.trim();
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, maxLength).trimEnd()}…`;
}

export async function getRecommendedArticles(): Promise<RecommendedArticle[]> {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(FEED_URL);
    const sourceDomain = new URL(feed.link ?? FEED_URL).hostname;
    const sourceName = feed.title ?? sourceDomain;

    return (feed.items ?? [])
      .filter((item): item is typeof item & { title: string; link: string } => Boolean(item.title && item.link))
      .slice(0, ARTICLE_COUNT)
      .map((item) => ({
        title: item.title,
        excerpt: truncate(item.contentSnippet ?? item.title, 140),
        link: item.link,
        sourceName,
        sourceDomain,
        faviconUrl: `https://www.google.com/s2/favicons?domain=${sourceDomain}&sz=64`,
      }));
  } catch (error) {
    console.error("Não foi possível carregar os artigos recomendados:", error);
    return [];
  }
}
