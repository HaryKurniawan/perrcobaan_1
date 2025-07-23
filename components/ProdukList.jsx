import { useEffect, useState } from "react";
import axios from "axios";

const ProdukList = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/produk")
      .then((res) => setProduk(res.data))
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Daftar Produk</h1>
      <div style={{ display: "grid", gap: "1rem" }}>
        {produk.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
            <img src={item.gambar} alt={item.nama_produk} style={{ width: "200px", height: "auto" }} />
            <h2>{item.nama_produk}</h2>
            <p>Harga: Rp{item.harga_produk.toLocaleString()}</p>
            <p>{item.detail_produk}</p>
            {/* <p><strong>Hit:</strong> {item.hit}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdukList;
