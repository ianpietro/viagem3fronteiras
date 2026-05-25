export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Fallbacks based on realistic travel exchange rates
  let usdRate = 5.30; 
  let arsaRate = 215 / 60000; 

  // 1. Try to scrape USD rate directly from dolarhoje.com (User Requested)
  try {
    const response = await fetch("https://dolarhoje.com/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });
    if (response.ok) {
      const html = await response.text();
      const match = html.match(/id="nacional"\s+value="([^"]+)"/);
      if (match) {
        const valStr = match[1].replace(",", ".");
        const parsed = parseFloat(valStr);
        if (!isNaN(parsed) && parsed > 1) {
          usdRate = parsed;
          console.log(`Successfully scraped USD rate from DolarHoje: ${usdRate}`);
        }
      }
    }
  } catch (err) {
    console.warn("Failed to scrape DolarHoje comercial rate, falling back...", err);
  }

  // 2. Try to scrape ARS rate directly from br.investing.com/currencies/ars-brl (User Requested)
  try {
    const response = await fetch("https://br.investing.com/currencies/ars-brl", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
      }
    });
    if (response.ok) {
      const html = await response.text();
      const match = html.match(/A taxa de câmbio agora é 1 ARS = ([0-9,.]+) BRL/) || 
                    html.match(/1 Peso = ([0-9,.]+) Real/) || 
                    html.match(/id="last_last"[^>]*>([0-9,.]+)</) || 
                    html.match(/"price":"([0-9,.]+)"/);
      if (match) {
        const valStr = match[1].replace(",", ".");
        const parsed = parseFloat(valStr);
        if (!isNaN(parsed) && parsed > 0 && parsed < 1) {
          arsaRate = parsed;
          console.log(`Successfully scraped ARS rate from Investing.com: ${arsaRate}`);
        }
      }
    }
  } catch (err) {
    console.warn("Failed to scrape Investing.com ARS rate, falling back...", err);
  }

  // 3. Fallbacks using daily open-source API if scraping was blocked
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/BRL");
    if (response.ok) {
      const data = await response.json();
      if (data && data.rates) {
        // Fallback USD if scraping was blocked
        if (usdRate === 5.30 && data.rates.USD) {
          usdRate = parseFloat((1 / data.rates.USD).toFixed(4));
          console.log(`USD rate fallback from open API: ${usdRate}`);
        }
        // Fallback ARS if scraping was blocked (1 BRL = rates.ARS Pesos => 1 Peso = 1 / rates.ARS BRL)
        if (arsaRate === (215 / 60000) && data.rates.ARS) {
          arsaRate = parseFloat((1 / data.rates.ARS).toFixed(8));
          console.log(`ARS rate fallback from open API: ${arsaRate}`);
        }
      }
    }
  } catch (err) {
    console.warn("Failed to fetch open API rates:", err);
  }

  return res.status(200).json({
    USD: usdRate,
    ARS: arsaRate
  });
}
