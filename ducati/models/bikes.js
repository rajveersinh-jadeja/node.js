const bikes = [
  {
    "name": "Panigale V4",
    "price": "₹32,69,958",
    "image": "https://cdn-s3.autocarindia.com/Ducati/panigale-v4/Panigale%20V4_1.jpg",
    "details": "1103 cc, 216 hp"
  },
  {
    "name": "Panigale V4 S",
    "price": "₹39,78,949",
    "image": "https://cdn-s3.autocarindia.com/Ducati/panigale-v4/Panigale%20V4_1.jpg",
    "details": "1103 cc, 216 hp"
  },
  {
    "name": "Panigale V4 R",
    "price": "₹84,99,000",
    "image": "https://cdn-s3.autocarindia.com/Ducati/panigale-v4-r/Panigale%20V4R_1.jpg",
    "details": "998 cc, 218 hp"
  },
  {
    "name": "Panigale V2",
    "price": "₹19,50,975",
    "image": "https://cdn-s3.autocarindia.com/Ducati/panigale-v2/Ducati_Panigale%20V2_1.jpg",
    "details": "890 cc, 118 hp"
  },
  {
    "name": "Panigale V2 S",
    "price": "₹21,86,000",
    "image": "https://cdn-s3.autocarindia.com/Ducati/panigale-v2/Ducati_Panigale%20V2_1.jpg",
    "details": "890 cc, 118 hp"
  },
  {
    "name": "Streetfighter V4",
    "price": "₹29,25,963",
    "image": "https://cdn-s3.autocarindia.com/Ducati/Streetfighter-V4/Streetfighter%20V4_8.jpg",
    "details": "1103 cc, 208 hp"
  },
  {
    "name": "Streetfighter V4 S",
    "price": "₹33,04,000",
    "image": "https://cdn-s3.autocarindia.com/Ducati/Streetfighter-V4/Streetfighter%20V4_8.jpg",
    "details": "1103 cc, 208 hp"
  },
  {
    "name": "Streetfighter V2",
    "price": "₹17,85,977",
    "image": "https://cdn-s3.autocarindia.com/Ducati/Streetfighter-V4/Streetfighter%20V4_8.jpg",
    "details": "890 cc, 120 hp"
  },
  {
    "name": "Monster",
    "price": "₹13,84,000",
    "image": "https://cdn-s3.autocarindia.com/Ducati/Monster-937/500_7317.JPG",
    "details": "937 cc, 110 hp"
  },
  {
    "name": "Scrambler Icon",
    "price": "₹10,86,986",
    "image": "https://cdn-s3.autocarindia.com/Ducati/scrambler-2g/Ducati_Scrambler%202G_1.jpg",
    "details": "803 cc, 72 hp"
  },
  {
    "name": "Scrambler Full Throttle",
    "price": "₹13,73,982",
    "image": "https://cdn-s3.autocarindia.com/Ducati/scrambler-2g/Ducati_Scrambler%202G_1.jpg",
    "details": "803 cc, 72 hp"
  },
  {
    "name": "Scrambler Nightshift",
    "price": "₹13,46,600",
    "image": "https://cdn-s3.autocarindia.com/Ducati/scrambler-2g/Ducati_Scrambler%202G_1.jpg",
    "details": "803 cc, 72 hp"
  },
  {
    "name": "DesertX",
    "price": "₹19,59,200",
    "image": "https://cdn-s3.autocarindia.com/Ducati/DesertX/ES3_2843.JPG",
    "details": "937 cc, 110 hp"
  },
  {
    "name": "DesertX Discovery",
    "price": "₹21,78,200",
    "image": "https://cdn-s3.autocarindia.com/Ducati/DesertX/ES3_2843.JPG",
    "details": "937 cc, 110 hp"
  },
  {
    "name": "DesertX Rally",
    "price": "₹23,70,800",
    "image": "https://cdn-s3.autocarindia.com/Ducati/DesertX/ES3_2843.JPG",
    "details": "937 cc, 108.5 hp"
  },
  {
    "name": "Multistrada V4",
    "price": "₹25,05,968",
    "image": "https://cdn-s3.autocarindia.com/Ducati/Multistrada-V2/MY25_Ducati_Multistrada_V2_S_003_UC744387_High.jpg",
    "details": "1158 cc, 170 hp"
  },
  {
    "name": "Multistrada V4 S",
    "price": "₹30,61,000",
    "image": "https://cdn-s3.autocarindia.com/Ducati/Multistrada-V2/MY25_Ducati_Multistrada_V2_S_003_UC744387_High.jpg",
    "details": "1158 cc, 170 hp"
  },
  {
    "name": "Multistrada V2",
    "price": "₹19,26,000",
    "image": "https://cdn-s3.autocarindia.com/Ducati/Multistrada-V2/MY25_Ducati_Multistrada_V2_S_003_UC744387_High.jpg",
    "details": "890 cc, 115.6 hp"
  },
  {
    "name": "Multistrada V2 S",
    "price": "₹21,42,000",
    "image": "https://cdn-s3.autocarindia.com/Ducati/Multistrada-V2/MY25_Ducati_Multistrada_V2_S_003_UC744387_High.jpg",
    "details": "890 cc, 115.6 hp"
  },
  {
    "name": "Diavel V4",
    "price": "₹29,65,962",
    "image": "https://cdn-s3.autocarindia.com/Ducati/Diavel-V4/500_0668.JPG",
    "details": "1158 cc, 168 hp"
  },
  {
    "name": "XDiavel",
    "price": "₹31,50,960",
    "image": "https://cdn-s3.autocarindia.com/Ducati/xdiavel/Ducati%20XDiavel_2.jpg",
    "details": "1158 cc, 166 hp"
  },
  {
    "name": "Hypermotard 698 Mono",
    "price": "₹18,70,300",
    "image": "https://cdn-s3.autocarindia.com/Ducati/hypermotard-698-mono/Ducati_Hypermotard%20698%20Mono_4.jpg",
    "details": "659 cc, 76 hp"
  },
  {
    "name": "Hypermotard 950",
    "price": "₹17,10,500",
    "image": "https://asset.autocarindia.com/static/models/colors/20251202_072514_a42ae2da.avif",
    "details": "937 cc, 113 hp"
  },
  {
    "name": "SuperSport 950",
    "price": "₹17,16,100",
    "image": "https://cdn-s3.autocarindia.com/Ducati/panigale-v2/Ducati_Panigale%20V2_1.jpg",
    "details": "937 cc, 109 hp"
  },
  {
    "name": "SuperSport 950 S",
    "price": "₹20,10,000",
    "image": "https://cdn-s3.autocarindia.com/Ducati/panigale-v2/Ducati_Panigale%20V2_1.jpg",
    "details": "937 cc, 109 hp"
  },
  {
    "name": "Desmo450 MX",
    "price": "₹17,23,600",
    "image": "https://cdn-s3.autocarindia.com/Ducati/desmo450-mx/DSC_5868.JPG",
    "details": "449.6 cc, 62.6 hp"
  }
]
export default bikes;