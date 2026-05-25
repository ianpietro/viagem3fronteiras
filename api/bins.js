export default async function handler(req, res) {
  // Enable CORS just in case, though same-origin doesn't need it
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { id } = req.query;
  const targetUrl = id 
    ? `https://jsonbin-zeta.vercel.app/api/bins/${id}`
    : `https://jsonbin-zeta.vercel.app/api/bins`;

  try {
    const fetchOptions = {
      method: req.method,
      headers: {
        "Content-Type": "application/json"
      }
    };

    if (req.method === "POST" || req.method === "PUT") {
      fetchOptions.body = JSON.stringify(req.body);
    }

    const apiResponse = await fetch(targetUrl, fetchOptions);
    
    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error(`Upstream error (${apiResponse.status}):`, errorText);
      return res.status(apiResponse.status).json({ error: "Upstream API error" });
    }

    const data = await apiResponse.json();
    return res.status(apiResponse.status).json(data);
    
  } catch (error) {
    console.error("Proxy error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
