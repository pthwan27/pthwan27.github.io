import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function GET() {
  const notion = new Client({
    auth: `${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
  });

  console.log("notion", notion);
  try {
    const res = await notion.pages.retrieve({
      page_id: "4bf8e542f7b445adb7f390f944559a23",
    });

    // const res = await notion.search({
    //   query: "새 페이지",
    //   filter: {
    //     value: "page",
    //     property: "object",
    //   },
    //   sort: {
    //     direction: "ascending",
    //     timestamp: "last_edited_time",
    //   },
    // });

    console.log("res", res);

    return NextResponse.json({
      data: res,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "err" });
  }
}
