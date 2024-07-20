// Blog type
export interface Blog {
  _id: number;
  mainImage: string;
  title: string;
  metadata: string;
  link: string; // new field
}

// BlogData array
const BlogData: Blog[] = [
  {
    _id: 1,
    mainImage: "/images/blog/blog1.jpg",
    title: "Sosialisasi Delegasi Mahasiswa KKN UNIPI",
    metadata:
      "Kelompok KKN Ds Banjarsari melakukan survey lokasi KKN dan melakukan silaturahmi ke kantor desa setempat serta menemui kepala Desa Banjarsari.",
    link: "/Berita/Sungai-Ambangah", // new field
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog1.jpg",
    title: "Sosialisasi Delegasi Mahasiswa KKN UNIPI",
    metadata:
      "Kelompok KKN Ds Banjarsari melakukan survey lokasi KKN dan melakukan silaturahmi ke kantor desa setempat serta menemui kepala Desa Banjarsari.",
    link: "/Berita/Sungai-Ambangah", // new field
  },
  {
    _id: 3,
    mainImage: "/images/blog/blog1.jpg",
    title: "Sosialisasi Delegasi Mahasiswa KKN UNIPI",
    metadata:
      "Kelompok KKN Ds Banjarsari melakukan survey lokasi KKN dan melakukan silaturahmi ke kantor desa setempat serta menemui kepala Desa Banjarsari.",
    link: "/Berita/Sungai-Ambangah", // new field
  },
  {
    _id: 3,
    mainImage: "/images/blog/blog1.jpg",
    title: "Sosialisasi Delegasi Mahasiswa KKN UNIPI",
    metadata:
      "Kelompok KKN Ds Banjarsari melakukan survey lokasi KKN dan melakukan silaturahmi ke kantor desa setempat serta menemui kepala Desa Banjarsari.",
    link: "/Berita/Sungai-Ambangah", // new field
  },
  
  // {
  //   _id: 4,
  //   mainImage: "/images/blog/blog-03.png",
  //   title: "Free advertising for your online business",
  //   metadata:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  //   link: "https://example.com/free-advertising-for-your-online-business", // new field
  // },
  // {
  //   _id: 5,
  //   mainImage: "/images/blog/blog-04.png",
  //   title: "9 simple ways to improve your design skills",
  //   metadata:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  //   link: "https://example.com/9-simple-ways-to-improve-your-design-skills", // new field
  // },
  // {
  //   _id: 6,
  //   mainImage: "/images/blog/blog-01.png",
  //   title: "Tips to quickly improve your coding speed.",
  //   metadata:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  //   link: "https://example.com/tips-to-quickly-improve-your-coding-speed", // new field
  // },
];

export default BlogData;