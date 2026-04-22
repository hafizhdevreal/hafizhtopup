export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.h2h.id/api/pricelist/srGYeZFCWbrhTsvrigsZVPiCWBxtCoVD8xpwCyzXIm7Z0Lof"
    );

    const data = await response.json();

    res.status(200).json(data.data || data);

  } catch (error) {
    res.status(500).json({ message: "Gagal ambil pricelist" });
  }
}
