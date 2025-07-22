import Parser from "rss-parser";

const parser = new Parser();

export async function fetchThreatFeed() {
  const feed = await parser.parseURL("https://feeds.feedburner.com/TheHackersNews");

  return feed.items.slice(0, 5).map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
  }));
}
