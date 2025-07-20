import HeroImage from "/assets/welcome-banner.jpg";
import cv from "/assets/cv/cv.pdf";

const Image = {
  HeroImage,cv,
};


export default Image;

import Tools1 from "/assets/tools/php.png";
import Tools2 from "/assets/tools/reactjs.png";
// import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/ci.png";
import Tools8 from "/assets/tools/laravel.png";
import Tools9 from "/assets/tools/java.png";
import Tools10 from "/assets/tools/python.png";
import Tools11 from "/assets/tools/r.png";
import Tools12 from "/assets/tools/mysql.png";
import Tools13 from "/assets/tools/github.png";
import Tools14 from "/assets/tools/ai.png";
import Tools15 from "/assets/tools/canva.png";
import Tools16 from "/assets/tools/figma.png";
import Tools17 from "/assets/tools/ae.png";
import Tools18 from "/assets/tools/davinci.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Php",
    ket: "Language",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  // {
  //   id: 3,
  //   gambar: Tools3,
  //   nama: "Next JS",
  //   ket: "Framework",
  //   dad: "300",
  // },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Code Igniter",
    ket: "Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Laravel",
    ket: "Framework",
    dad: "700",
  },
   {
    id: 9,
    gambar: Tools9,
    nama: "Java",
    ket: "Language",
    dad: "700",
  },
   {
    id: 10,
    gambar: Tools10,
    nama: "Python",
    ket: "Language",
    dad: "700",
  },
   {
    id: 11,
    gambar: Tools11,
    nama: "R",
    ket: "Language",
    dad: "700",
  },
   {
    id: 12,
    gambar: Tools12,
    nama: "Mysql",
    ket: "Language",
    dad: "700",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "After Effect",
    ket: "Video Editor",
    dad: "1100",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "DaVinci",
    ket: "Video Editor",
    dad: "1100",
  },
];

import p1 from "/assets/proyek/anq.png";
import p2 from "/assets/proyek/astra.png";
import p3 from "/assets/proyek/hannavilla.PNG";
import p4 from "/assets/proyek/sikom.PNG";
import p5 from "/assets/proyek/e-kpb.PNG";
import p6 from "/assets/proyek/internal.PNG";
import p7 from "/assets/proyek/vega.PNG";
import p8 from "/assets/proyek/disney.png";

export const listProyek = [
  {
    id: 1,
    gambar: p1,
    nama: "ANNA QUINN",
    desk: "ANQ adalah website pemasaran villa yang dikembangkan menggunakan Laravel 10, dirancang untuk memudahkan promosi dan pemesanan properti secara online.",
    tools: ["HTML", "Bootstrap", "Javascript", "Laravel", "MYSQL"],
    dad: "200",
    link: "https://annaandquinn.com/",
  },
  {
    id: 2,
    gambar: p2,
    nama: "ASTRA DAIHATSU",
    desk: "ASTRA DAIHATSU adalah website katalog mobil interaktif yang memungkinkan pengguna untuk melihat detail produk dan spesifikasi kendaraan dari Daihatsu secara online",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "300",
    link: "https://daihatsutangerangkota.com/",
  },
  {
    id: 3,
    gambar: p3,
    nama: "HANNA VILLA",
    desk: "HANNA VILLA adalah website pemesanan villa yang dilengkapi dengan sistem manajemen hotel untuk mempermudah proses booking dan pengelolaan reservasi.",
    tools: ["HTML", "Bootstrap", "PHP", "MYSQL", "AOS"],
    dad: "400",
    link:"https://hannavilla.com/",
  },
  {
    id: 4,
    gambar: p4,
    nama: "SIKOM PRESISI",
    desk: "SIKOM PRESISI adalah website profil kepolisian yang menyajikan informasi terkait Sumber Daya Manusia (SDM) dan Pengadaan Barang dan Jasa (PBJ).",
    tools: ["HTML", "Bootstrap", "AOS"],
    dad: "500",
    link:"https://sikompresisi.vercel.app/",
  },
  {
    id: 5,
    gambar: p5,
    nama: "E-KPB",
    desk: "E-KPB adalah website profil resmi Pemerintah Kota Bandar Lampung yang berfungsi sebagai media informasi kegiatan, program kerja, dan perkembangan pembangunan daerah.",
    tools: ["HTML", "CSS", "Javascript", "TailwindCSS"],
    dad: "600",
    link: "https://portoe-kb.vercel.app/",
  },
  {
    id: 6,
    gambar: p6,
    nama: "INTERNAL VEGA",
    desk: "INTERNAL VEGA adalah sistem internal perusahaan yang terintegrasi dengan proses transfer dana serta pengelolaan data seperti laporan gaji, kehadiran karyawan, dan informasi nilai tukar (kurs).",
    tools: ["HTML", "Bootstrap", "CI4", "MYSQL"],
    dad: "700",
    linnk: "https://internal.vega.co.id/",
  },
    {
    id: 7,
    gambar: p7,
    nama: "VEGA",
    desk: "VEGA adalah website company profile yang dilengkapi fitur pengecekan harga kurs mata uang secara real-time melalui integrasi API. ",
    tools: ["Bootstrap", "HTML", "Javascript"],
    dad: "700",
    link: "https://vegakurs.vega.co.id/",
  },
    {
    id: 8,
    gambar: p8,
    nama: "Disney+",
    desk: "Di proyek ini, saya membuat clone tampilan aplikasi Disney+ menggunakan React, Tailwind CSS, dan mengambil data film dari API TMDB",
    tools: ["Tailwindcss", "HTML", "React", "TMDB"],
    dad: "700",
    link: "https://porto-disney-xs6o.vercel.app/",
  },
];
