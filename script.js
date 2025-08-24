// Ambil semua gambar dalam gallery
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    // Buat elemen div untuk popup
    let popup = document.createElement("div");
    popup.classList.add("popup");

    // Isi popup dengan gambar + tombol close
    popup.innerHTML = `
      <span>&times;</span>
      <img src="${img.src}" alt="">
    `;

    // Masukkan popup ke body
    document.body.appendChild(popup);

    // Tutup popup kalau klik tombol close
    popup.querySelector("span").addEventListener("click", () => {
      popup.remove();
    });

    // Tutup popup kalau klik area luar gambar
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.remove();
      }
    });
  });
});
