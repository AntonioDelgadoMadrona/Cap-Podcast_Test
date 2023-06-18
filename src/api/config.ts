export async function get({ endpoint }: { endpoint: string }) {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(endpoint)}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}
