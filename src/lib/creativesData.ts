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
    description: "kadara-description", // variable name in en.json file under "Creatives"
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
    description: "sulvam-description",
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
    description: "wataru-description",
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
    description: "coyote-description",
    pfp: undefined,
    instagram: "https://www.instagram.com/yoshikazuyamagata/",
    website: null,
    images: [
      { url: "/faceajss2020/tokyo/COYOTE/coyote_01.jpg", alt: "Models on stage" },
      { url: "/faceajss2020/tokyo/COYOTE/coyote_02.jpg", alt: "Models on stage from a diagonal" },
      { url: "/faceajss2020/tokyo/COYOTE/coyote_03.jpg", alt: "Focus on on model in lineup" },
      { url: "/faceajss2020/tokyo/COYOTE/coyote_04.jpg", alt: "Two models shoulder to shoulder" },
      { url: "/faceajss2020/tokyo/COYOTE/coyote_05.jpg", alt: "Coyote clothes on rack" },
    ]
  },
  {
    name: "Anyango Mpinga (Kenya)",
    path: "anyango-mpinga",
    description: "anyango-description",
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
    description: "kenneth-description",
    pfp: "/creatives/Kenneth_Ize_pfp.jpg",
    instagram: "https://www.instagram.com/kennethize/",
    website: "https://www.kennethize.net/",
    images: [
      { url: "/faceajss2020/tokyo/Kenneth/kenneth_01.jpg", alt: "Kenneth Ize" },
      { url: "/faceajss2020/tokyo/Kenneth/kenneth_02.jpg", alt: "Upclose of male model's face" },
      { url: "/faceajss2020/tokyo/Kenneth/kenneth_03.jpg", alt: "Kenneth Ize backstage" },
      { url: "/faceajss2020/tokyo/Kenneth/kenneth_04.jpg", alt: "Models on stage" },
      { url: "/faceajss2020/tokyo/Kenneth/kenneth_05.jpg", alt: "Models on stage" },
    ]
  },
  {
    name: "Thebe Magugu (South Africa)",
    path: "thebe-magugu",
    description: "thebe-description",
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
    description: "waffles-description",
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
    description: 'children-description',
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
    description: "maxhosa-description",
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
