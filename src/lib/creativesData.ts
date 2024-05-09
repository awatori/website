export interface Creative {
  name: string;
  image: string;
  country: string;
  alt: string;
  url: string;
}

// Used to render the creatives profile cards
export const faceAJSS2020Creatives: Creative[] = [
  {
    name: "Kadara Enyeasi",
    country: "Nigeria",
    image: "/creatives/Kadara_Enyeasi.jpg",
    alt: "Kadara Enyeasi profile picture",
    url: "/our-creatives/kadara-enyeasi",
  },
  {
    name: "Sulvam",
    country: "Japan",
    image: "/creatives/Sulvam.jpg",
    alt: "Sulvam profile picture",
    url: "/our-creatives/sulvam",
  },
  {
    name: "Wataru Tominaga",
    country: "Japan",
    image: "/creatives/Wataru_Tominaga.jpg",
    alt: "Wataru Tominaga profile picture",
    url: "/our-creatives/wataru-tominaga",
  },
  {
    name: "COYOTE/Coconogacco",
    country: "Japan",
    image: "/creatives/Coyote.jpg",
    alt: "Coyote profile picture",
    url: "/our-creatives/coyote",
  },
  {
    name: "Anyango Mpinga",
    country: "Kenya",
    image: "/creatives/Anyango_Mpinga.jpg",
    alt: "Anyango Maphinga profile picture",
    url: "/our-creatives/anyango-mpinga",
  },
  {
    name: "Kenneth Ize",
    country: "Nigeria",
    image: "/creatives/Kenneth_Ize.jpg",
    alt: "Kenneth Ize profile picture",
    url: "/our-creatives/kenneth-ize",
  },
  {
    name: "Thebe Magugu",
    country: "South Africa",
    image: "/creatives/Thebe_Magugu.jpg",
    alt: "Thebe Magugu profile picture",
    url: "/our-creatives/thebe-magugu"
  }
]

export const faceAJSS2021Creatives: Creative[] = [
  {
    name: ".m.jk",
    country: "Japan",
    image: "/creatives/mjk.jpg",
    alt: ".m.jk profile picture",
    url: "https://www.instagram.com/mjk_mjk/",
  },
  {
    name: "FahdUniverse",
    country: "Nigeria",
    image: "/creatives/FahdUniverse.jpg",
    alt: "FahdUniverse profile picture",
    url: "https://www.instagram.com/fahdsuniverse/?utm_source=ig_profile_share&igshid=1foora8rivswa"
  },
  {
    name: "WAFFLESNCREAM",
    country: "Nigeria",
    image: "/creatives/Wafflesncream.jpg",
    alt: "WAFFLESNCREAM profile picture",
    url: "/our-creatives/wafflesncream"
  }
]

export const faceAJAW2021Creatives: Creative[] = [
  {
    name: "Children of the discordance",
    country: "Japan",
    image: "/creatives/children-of-the-discordance_portrait.jpg",
    alt: "Children of the discordance profile picture",
    url: "/our-creatives/children-of-the-discordance",
  }
];

export const faceAJSS2022Creatives: Creative[] = [
  {
    name: "MAXHOSA AFRICA",
    country: "South Africa",
    image: "/creatives/Maxhosa-Africa.jpg",
    alt: "MAXHOSA AFRICA logo",
    url: "/our-creatives/maxhosa-africa",
  }
];

export interface CreativesPage {
  name: string;
  path: string;
  description: string;
  pfp: string | undefined;
  instagram: string | null;
  website: string | null;
  images: { url: string, alt: string }[];
}

// For creatives with their own profile page, routes dynamically rendered by path
export const creativesWithPages: CreativesPage[] = [
  {
    name: "Kadara Enyeasi (Nigeria)",
    path: "kadara-enyeasi",
    description: "A 24 year old fine art photographer from Lagos, Nigeria, Enyeasi’s work is influenced by an understanding of form, space and perspective, mostly due to his training as an architect. His early influences stretch from the high concept layered order of the ‘five points’ postulated by Le Corbusier, to the classic avant-garde portraitures of early West African photographers. Driven by a narrative, his eye, through the camera always sees something that wills the audience in; the images seeming to riff with the shadows of a serene everyday sexual provocation. His work moving forward will focus strongly on gender and sexual rights vis-a-vis institutions and these institutions’ culpability in promulgating specific rights-exclusive agendas.",
    pfp: "/creatives/Kadara_Enyeasi_pfp.jpg",
    instagram: "https://www.instagram.com/enyeasi/",
    website: null,
    images: [
      { url: "/faceajss2020/tokyo/kadaraEnyeasi/_DSC6824.jpg", alt: "Kadara Enyeasi posters" },
      { url: "/faceajss2020/tokyo/kadaraEnyeasi/_DSC6887.jpeg", alt: "Kadara Enyeasi posters" },
      { url: "/faceajss2020/tokyo/_DSC7531.jpg", alt: "Band on stage" },
    ]
  },
  {
    name: "Sulvam (Japan)",
    path: "sulvam",
    description: "A former pattern maker for Yohji Yamamoto. multiple award winner, and shortlisted for the 2017 LVMH Prize, Teppei Fujita launched Sulvam in 2014. At the same time, he won the Tokyo Fashion Awards, and the “Who is on Next? Dubai” contest in 2015. Experimenting with patterns, prints, textures, and colors, Fujita’s work challenges conventional fashion and the concept of genderfluidity, which is prominent in his collections. His unconventional way of developing his collection, allows him the freedom to exceptional pieces that are avant-garde, but wearable.",
    pfp: "/creatives/Sulvam_pfp.jpg",
    instagram: "https://www.instagram.com/sulvam_official/",
    website: "https://sulvam.com/",
    images: [
      { url: "/faceajss2020/tokyo/sulvam/_DSC6852.jpg", alt: "Sulvam" },
      { url: "/faceajss2020/tokyo/sulvam/_DSC6990.jpg", alt: "Man in front of mic" },
      { url: "/faceajss2020/tokyo/sulvam/_DSC7325.jpg", alt: "Band on stage with large screen background" },
      { url: "/faceajss2020/tokyo/sulvam/_DSC7007.jpg", alt: "Man playing guitar" },
      { url: "/faceajss2020/tokyo/sulvam/_DSC6880.jpg", alt: "FACE AJ band" },
      { url: "/faceajss2020/tokyo/sulvam/_DSC6846.jpg", alt: "Band" },
    ]
  },
  {
    name: "Wataru Tominaga (Japan)",
    path: "wataru-tominaga",
    description: "From Kumamoto, Wataru Tominaga is graduate of Central Saint Martins College of Art & Design and the winner of The Grand Jury Prize Premier Vision Grand Prix at the 31st edition of the Hyeres International Festival Fashion and Photography. His bold and sometimes chaotic prints and designs are reminiscent of the 60s and 70s, the main inspiration behind his collections. Tominaga also explores the deconstruction of stereotypes in fashion and textile, and constantly seeks to create clothes which put together go against traditional representations and rules on gender, race, and age.",
    pfp: undefined,
    instagram: "https://www.instagram.com/wataru_tominaga/",
    website: "https://www.watarutominaga.com/",
    images: [
      { url: "/faceajss2020/tokyo/wataruTominaga/_DSC7204.jpg", alt: "Models on stage" },
      { url: "/faceajss2020/tokyo/wataruTominaga/_DSC7219.jpg", alt: "Close up of models' feet on stage" },
      { url: "/faceajss2020/tokyo/wataruTominaga/_DSC7260.jpg", alt: "Male model headshot" },
      { url: "/faceajss2020/tokyo/wataruTominaga/_DSC7246.jpg", alt: "Photographers taking photos of models" },
    ]
  },
  {
    name: "COYOTE / Coconogacco (Japan)",
    path: "coyote",
    description: "COYOTE is a group of designers from the Coconogacco, an independent fashion school in Tokyo. Founded in 2007 by the winner of the Tokyo Fashion Award, Yamagata, the designer behind Writtenafterwards – a brand that has successfully held two exhibitions in Paris as well as being nominated for the LVMH Prize in 2015. Through Coconogacco, Yamagata aims to educate and develop the next generation of Japanese designers, providing them with the tools to succeed in the global luxury market. COYOTE, a group of young designers, will debut a collection to showcase at FACE.A-J.",
    pfp: undefined,
    instagram: "https://www.instagram.com/yoshikazuyamagata/",
    website: null,
    images: [
      { url: "/faceajss2020/tokyo/coyote/_DSC7177.jpg", alt: "Models on stage" },
      { url: "/faceajss2020/tokyo/coyote/_DSC7181.jpg", alt: "Models on stage from a diagonal" },
      { url: "/faceajss2020/tokyo/coyote/_DSC7196.jpg", alt: "Focus on on model in lineup" },
      { url: "/faceajss2020/tokyo/coyote/_DSC7203.jpg", alt: "Two models shoulder to shoulder" },
      { url: "/faceajss2020/tokyo/coyote/IMG_2298.JPG", alt: "Coyote clothes on rack" },
    ]
  },
  {
    name: "Anyango Mpinga (Kenya)",
    path: "anyango-mpinga",
    description: "Born in Kenya, coming from a communications background, and no official fashion education, Mpinga followed her passion and launched her brand in 2015. She has since showcased her works in Kenya, Ethiopia, Nigeria, Mozambique and France; she has also been twice nominated for the Kenya Designer of the year and received the International Design Award by She Trades Collective. Her collections are inspired by culture, a passion for art, and narratives that touch on social issues in Africa. Her pieces are currently only sold online.",
    pfp: "/creatives/Anyango_Mpinga_pfp.jpg",
    instagram: "https://www.instagram.com/anyangompinga/",
    website: "https://anyangompinga.com/",
    images: [
      { url: "/faceajss2020/tokyo/anyangoMpinga/_DSC6893.jpg", alt: "Up close of model's face" },
      { url: "/faceajss2020/tokyo/anyangoMpinga/_DSC6918.jpg", alt: "Models on stage" },
      { url: "/faceajss2020/tokyo/anyangoMpinga/_DSC7028.jpg", alt: "Model with afro in blue lighting" },
      { url: "/faceajss2020/tokyo/anyangoMpinga/_DSC7065.jpg", alt: "Models dancing on stage" },
      { url: "/faceajss2020/tokyo/anyangoMpinga/9A3B49A0-6656-408D-8C4B-1D2C713B23DB.JPG", alt: "Models dancing on stage" },
    ]
  },
  {
    name: "Kenneth Ize (Nigeria)",
    path: "kenneth-ize",
    description: "One of the two African designers to be nominated for the 2019 LVMH PRIZE, born in Nigeria, Ize graduated from the University of Applied Arts in Vienna and launched his brand in 2013. Working with local artisans and textile manufacturers combining traditional craftsmanship with contemporary concepts, he is known as one of the trailblazers of the African fashion luxury market. Ize has stockists in Austria and Nigeria.",
    pfp: "/creatives/Kenneth_Ize_pfp.jpg",
    instagram: "https://www.instagram.com/kennethize/",
    website: "https://www.kennethize.net/",
    images: [
      { url: "/faceajss2020/tokyo/kenneth/_DSC6878.jpg", alt: "Kenneth Ize" },
      { url: "/faceajss2020/tokyo/kenneth/_DSC7228.jpg", alt: "Upclose of male model's face" },
      { url: "/faceajss2020/tokyo/kenneth/_DSC6833.jpg", alt: "Kenneth Ize backstage" },
      { url: "/faceajss2020/tokyo/kenneth/_DSC7231.jpg", alt: "Models on stage" },
      { url: "/faceajss2020/tokyo/kenneth/_DSC7226.jpg", alt: "Models on stage" },
    ]
  },
  {
    name: "Thebe Magugu (South Africa)",
    path: "thebe-magugu",
    description: "The winner of the 2019 LVMH PRIZE and the first African designer to win the prestigious title, Magugu was born in South Africa, studying at Johannesburg Fashion Design School & Retail Education Institute before launching his first collection in 2015. Since, he has collaborated with renowned designers such as Richi Mnisi, showcased in London and Paris where he was nominated for the LVMH PRIZE. His work is inspired by culture, tradition, contemporary art and experience, giving another view on how the aesthetics of the African apparel industry is perceived. He currently has stockists in South Africa and France.",
    pfp: undefined,
    instagram: "https://www.instagram.com/thebemagugu/",
    website: "https://www.thebemagugu.com/",
    images: [
      { url: "/faceajss2020/tokyo/thebeMagugu/_DSC7124.jpg", alt: "Thebe Magugu runway show" },
      { url: "/faceajss2020/tokyo/thebeMagugu/_DSC6929.jpg", alt: "Model" },
      { url: "/faceajss2020/tokyo/thebeMagugu/_DSC6940.jpg", alt: "Model in cap" },
      { url: "/faceajss2020/tokyo/thebeMagugu/_DSC7076.jpg", alt: "Model in dress with band in background" },
      { url: "/faceajss2020/tokyo/thebeMagugu/_DSC7094.jpg", alt: "Model in blue and black dress" }
    ]
  },
  {
    name: "WAFFLESNCREAM (Nigeria)",
    path: "wafflesncream",
    description: "The Nigerian brand WAFFLESNCREAM, founded by Jomi Bello, is the first and only skate shop in the region aims to support skateboarding regeneration projects by building skate parks in and around Africa by collaborating with local skaters and artists. WAFFLESNCREAM is a community of like minded skateboarders, bmx riders, graffiti artists, photographers, musicians, graphic designers and video directors that are keen to celebrate subcultures. With an original approach to design, they aim to focus on quality goods.",
    pfp: "/creatives/Wafflesncream.jpg",
    instagram: "https://www.instagram.com/wflsncrm/",
    website: null,
    images: [
      { url: "/faceajss2021/faceajss2021_01.png", alt: "Skaters wearing WAFFLESNCREAM merchandise" },
      { url: "/faceajss2021/faceajss2021_06.png", alt: "Skate ramp with WAFFLESNCREAM logo" },
      { url: "/faceajss2021/faceajss2021_04.png", alt: "Skater with WAFFLESNCREAM shirts" },
      { url: "/faceajss2021/faceajss2021_05.png", alt: "Close up of sneakers" },
      { url: "/faceajss2021/faceajss2021_09.png", alt: "Man in WAFFLESNCREAM merchandise" },
    ]
  },
  {
    name: "Children of the discordance (Japan)",
    path: "children-of-the-discordance",
    description: 'Created by designer Hideaki Shikama, the brand started to develop in the form of exhibitions from spring / summer 2012. The brand offers a handmade line produced in the atelier of longtime friend and artist Naoto Yoshida, which proposes a new interpretation of vintage wear. The products are highly rare. The brand also focuses on developing fair trade items with the Zapatistas of Mexico, the Maasai tribe of Africa, and the Hirbawi Textile Factory; the last textile factory in Palestine. "Discordance" means incongruity. The brand name reflects our desire to preserve our own unique style that is not in harmony with trends, society, or the times, which we have held since our teenage years when we first encountered fashion and music.',
    pfp: "/creatives/children-of-the-discordance_portrait.jpg",
    instagram: "https://www.instagram.com/children_of_the_discordance/",
    website: "https://www.childrenofthediscordance.com/",
    images: [
      { url: "/faceajaw2021/faceajaw2021_01.png", alt: "Model walking down a runway" },
      { url: "/faceajaw2021/faceajaw2021_02.jpg", alt: "Model walking down a runway" },
      { url: "/faceajaw2021/faceajaw2021_03.jpg", alt: "Model walking down a runway" },
      { url: "/faceajaw2021/faceajsw2021_04.jpg", alt: "Model walking down a runway" },
    ]
  },
  {
    name: "MAXHOSA AFRICA (South Africa)",
    path: "maxhosa-africa",
    description: "Founded in 2012 by Laduma Ngxokolo, Laduma is a South African knitwear brand whose initial vision was to create a modern knitwear collection inspired by his South African Kosa roots, As someone who has gone through the rite of passage himself, Laduma knew he had to develop premium knitwear that celebrated the traditional Kosa aesthetic. Laduma, having experienced the rite of passage himself, felt compelled to develop premium knitwear that celebrates the traditional Cosa aesthetic. In exploring the patterns, symbols, and colors of traditional Cosa beadwork, he found them to be a source of inspiration for his knitwear, giving it a new interpretation as modern knitwear. MAXHOSA AFRICA's designs express the beauty, culture, language, and hope of the Cosa people. These 'traditions' have been evolved in a modern way and incorporated into designs that fit the times. MAXHOSA AFRICA aims to be a leading brand in the African luxury fashion and lifestyle market.",
    pfp: "/creatives/Maxhosa-Africa.jpg",
    instagram: "https://www.instagram.com/maxhosa/",
    website: "https://shop.maxhosa.africa/",
    images: [
      { url: "/faceajss2022/DSC06425.jpg", alt: "Two models in MAXHOSA AFRICA designs" },
      { url: "/faceajss2022/DSC06543.jpg", alt: "Models in MAXHOSA AFRICA designs" },
      { url: "/faceajss2022/L1010453.jpg", alt: "Model adjusting earring, close up" },
      { url: "/faceajss2022/L1010630.jpg", alt: "Model sitting on couch" },
      { url: "/faceajss2022/L1010516.jpg", alt: "Model in MAXHOSA design" },
      { url: "/faceajss2022/L1010543.jpg", alt: "Model in MAXHOSA design" },
      { url: "/faceajss2022/L1010681.jpg", alt: "Models in MAXHOSA design" },
    ]
  }
];

// Used /src/app/our-creatives/[path]/page.tsx
export function getCreativeByPath(path: string) {
  for (const index in creativesWithPages) {
    if (creativesWithPages[index].path === path) return creativesWithPages[index];
  }
}
