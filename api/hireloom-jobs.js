export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://hireloom-official.vercel.app/api/public/jobs/nexacore"
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch Hireloom jobs"
    });
  }
}
