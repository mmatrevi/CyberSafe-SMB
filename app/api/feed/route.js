// app/api/feed/route.js
import { NextResponse } from "next/server";
import RSSParser from "rss-parser";

const parser = new RSSParser();

export async function GET() {
  try {
    const feed = await parser.parseURL("https://feeds.feedburner.com/TheHackersNews");
    const items = feed.items.slice(0, 6).map((item) => ({
      title: item.title,
      link: item.link,
    }));

    return NextResponse.json(items); // ✅ Always use NextResponse.json for JSON
  } catch (error) {
    console.error("RSS Feed Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch RSS feed." }, { status: 500 });
  }
}
