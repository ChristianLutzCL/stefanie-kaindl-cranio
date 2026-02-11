// Utility to fetch yoga dates from Notion at build time
export async function getYogaDates(): Promise<string[]> {
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const DATABASE_ID = process.env.NOTION_YOGA_DATABASE_ID;

  if (!NOTION_API_KEY || !DATABASE_ID) {
    console.warn('Notion credentials not configured, returning empty dates');
    return [];
  }

  try {
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
        // Important: Don't cache during build
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      console.error('Notion API error:', response.status, response.statusText);
      return [];
    }

    const data = await response.json();

    // Extract and format dates
    const dates = data.results
      .map((page: any) => {
        const dateProperty = page.properties.Date;
        if (dateProperty && dateProperty.date) {
          const date = new Date(dateProperty.date.start);
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const year = date.getFullYear();
          return `${day}.${month}.${year}`;
        }
        return null;
      })
      .filter(Boolean) as string[];

    console.log(`✓ Fetched ${dates.length} yoga dates from Notion`);
    return dates;
  } catch (error) {
    console.error('Error fetching yoga dates from Notion:', error);
    return [];
  }
}
