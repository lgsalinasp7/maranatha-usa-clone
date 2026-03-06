import { NextResponse } from "next/server";

const INSTAGRAM_API = "https://graph.instagram.com";

export type InstagramPost = {
  id: string;
  caption: string | null;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
};

export async function GET() {
  const userId = process.env.INSTAGRAM_USER_ID;
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!userId || !token) {
    return NextResponse.json(
      { posts: [], error: "Instagram credentials not configured" },
      { status: 200 }
    );
  }

  try {
    const fields = [
      "id",
      "caption",
      "media_type",
      "media_url",
      "permalink",
      "thumbnail_url",
    ].join(",");

    const url = `${INSTAGRAM_API}/${userId}/media?fields=${fields}&limit=3&access_token=${token}`;
    const res = await fetch(url);

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Instagram API error:", err);
      return NextResponse.json({ posts: [] }, { status: 200 });
    }

    const data = await res.json();
    const posts: InstagramPost[] = (data.data || []).map((item: InstagramPost) => ({
      id: item.id,
      caption: item.caption || null,
      media_type: item.media_type,
      media_url: item.media_url,
      permalink: item.permalink,
      thumbnail_url: item.thumbnail_url,
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Instagram fetch error:", error);
    return NextResponse.json({ posts: [] }, { status: 200 });
  }
}
