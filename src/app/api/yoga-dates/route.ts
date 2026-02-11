import { NextResponse } from 'next/server';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = process.env.NOTION_YOGA_DATABASE_ID || '';

export async function GET() {
  try {
    if (!NOTION_API_KEY) {
      return NextResponse.json(
        { error: 'Notion API key not configured' },
        { status: 500 }
      );
    }

    if (!DATABASE_ID) {
      return NextResponse.json(
        { error: 'Notion database ID not configured' },
        { status: 500 }
      );
    }

    // Query the Notion database using REST API
    const response = await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filter: {
            property: 'Date',
            date: {
              on_or_after: new Date().toISOString(),
            },
          },
          sorts: [
            {
              property: 'Date',
              direction: 'ascending',
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Notion API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to fetch from Notion', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Extract dates from the response
    const dates = data.results.map((page: any) => {
      const dateProperty = page.properties.Date;
      if (dateProperty && dateProperty.date) {
        const date = new Date(dateProperty.date.start);
        // Format as DD.MM.YYYY
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      }
      return null;
    }).filter(Boolean);

    return NextResponse.json({ dates });
  } catch (error: any) {
    console.error('Error fetching yoga dates from Notion:', error);
    return NextResponse.json(
      { error: 'Failed to fetch yoga dates', details: error.message },
      { status: 500 }
    );
  }
}
