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
    country: "",
    image: "/creatives/mjk.jpg",
    alt: ".m.jk profile picture",
    url: "https://www.instagram.com/mjk_mjk/",
  },
  {
    name: "FahdUniverse",
    country: "Artist",
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

export interface CreativesPage {
  name: string;
  path: string;
  description: string;
  pfp: string | undefined;
  instagram: string | null;
  website: string | null;
}

// For creatives with their own profile page, routes dynamically rendered by path
export const creativesWithPages: CreativesPage[] = [
  {
    name: "Kadara Enyeasi (Nigeria)",
    path: "kadara-enyeasi",
    description: "A 24 year old fine art photographer from Lagos, Nigeria, Enyeasi’s work is influenced by an understanding of form, space and perspective, mostly due to his training as an architect. His early influences stretch from the high concept layered order of the ‘five points’ postulated by Le Corbusier, to the classic avant-garde portraitures of early West African photographers. Driven by a narrative, his eye, through the camera always sees something that wills the audience in; the images seeming to riff with the shadows of a serene everyday sexual provocation. His work moving forward will focus strongly on gender and sexual rights vis-a-vis institutions and these institutions’ culpability in promulgating specific rights-exclusive agendas.",
    pfp: "/creatives/Kadara_Enyeasi_pfp.jpg",
    instagram: "https://www.instagram.com/enyeasi/",
    website: null
  },
  {
    name: "Sulvam (Japan)",
    path: "sulvam",
    description: "A former pattern maker for Yohji Yamamoto. multiple award winner, and shortlisted for the 2017 LVMH Prize, Teppei Fujita launched Sulvam in 2014. At the same time, he won the Tokyo Fashion Awards, and the “Who is on Next? Dubai” contest in 2015. Experimenting with patterns, prints, textures, and colors, Fujita’s work challenges conventional fashion and the concept of genderfluidity, which is prominent in his collections. His unconventional way of developing his collection, allows him the freedom to exceptional pieces that are avant-garde, but wearable.",
    pfp: "/creatives/Sulvam_pfp.jpg",
    instagram: "https://www.instagram.com/sulvam_official/",
    website: "https://sulvam.com/"
  },
  {
    name: "Wataru Tominaga (Japan)",
    path: "wataru-tominaga",
    description: "From Kumamoto, Wataru Tominaga is graduate of Central Saint Martins College of Art & Design and the winner of The Grand Jury Prize Premier Vision Grand Prix at the 31st edition of the Hyeres International Festival Fashion and Photography. His bold and sometimes chaotic prints and designs are reminiscent of the 60s and 70s, the main inspiration behind his collections. Tominaga also explores the deconstruction of stereotypes in fashion and textile, and constantly seeks to create clothes which put together go against traditional representations and rules on gender, race, and age.",
    pfp: undefined,
    instagram: "https://www.instagram.com/wataru_tominaga/",
    website: "https://www.watarutominaga.com/"
  },
  {
    name: "COYOTE / Coconogacco (Japan)",
    path: "coyote",
    description: "COYOTE is a group of designers from the Coconogacco, an independent fashion school in Tokyo. Founded in 2007 by the winner of the Tokyo Fashion Award, Yamagata, the designer behind Writtenafterwards – a brand that has successfully held two exhibitions in Paris as well as being nominated for the LVMH Prize in 2015. Through Coconogacco, Yamagata aims to educate and develop the next generation of Japanese designers, providing them with the tools to succeed in the global luxury market. COYOTE, a group of young designers, will debut a collection to showcase at FACE.A-J.",
    pfp: undefined,
    instagram: "https://www.instagram.com/yoshikazuyamagata/",
    website: null
  },
  {
    name: "Anyango Mpinga (Kenya)",
    path: "anyango-mpinga",
    description: "Born in Kenya, coming from a communications background, and no official fashion education, Mpinga followed her passion and launched her brand in 2015. She has since showcased her works in Kenya, Ethiopia, Nigeria, Mozambique and France; she has also been twice nominated for the Kenya Designer of the year and received the International Design Award by She Trades Collective. Her collections are inspired by culture, a passion for art, and narratives that touch on social issues in Africa. Her pieces are currently only sold online.",
    pfp: "/creatives/Anyango_Mpinga_pfp.jpg",
    instagram: "https://www.instagram.com/anyangompinga/",
    website: "https://anyangompinga.com/"
  },
  {
    name: "Kenneth Ize (Nigeria)",
    path: "kenneth-ize",
    description: "One of the two African designers to be nominated for the 2019 LVMH PRIZE, born in Nigeria, Ize graduated from the University of Applied Arts in Vienna and launched his brand in 2013. Working with local artisans and textile manufacturers combining traditional craftsmanship with contemporary concepts, he is known as one of the trailblazers of the African fashion luxury market. Ize has stockists in Austria and Nigeria.",
    pfp: "/creatives/Kenneth_Ize_pfp.jpg",
    instagram: "https://www.instagram.com/kennethize/",
    website: "https://www.kennethize.net/"
  },
  {
    name: "Thebe Magugu (South Africa)",
    path: "thebe-magugu",
    description: "The winner of the 2019 LVMH PRIZE and the first African designer to win the prestigious title, Magugu was born in South Africa, studying at Johannesburg Fashion Design School & Retail Education Institute before launching his first collection in 2015. Since, he has collaborated with renowned designers such as Richi Mnisi, showcased in London and Paris where he was nominated for the LVMH PRIZE. His work is inspired by culture, tradition, contemporary art and experience, giving another view on how the aesthetics of the African apparel industry is perceived. He currently has stockists in South Africa and France.",
    pfp: undefined,
    instagram: "https://www.instagram.com/thebemagugu/",
    website: "https://www.thebemagugu.com/"
  },
  {
    name: "WAFFLESNCREAM (Nigeria)",
    path: "wafflesncream",
    description: "The Nigerian brand WAFFLESNCREAM, founded by Jomi Bello, is the first and only skate shop in the region aims to support skateboarding regeneration projects by building skate parks in and around Africa by collaborating with local skaters and artists. WAFFLESNCREAM is a community of like minded skateboarders, bmx riders, graffiti artists, photographers, musicians, graphic designers and video directors that are keen to celebrate subcultures. With an original approach to design, they aim to focus on quality goods.",
    pfp: "/creatives/Wafflesncream.jpg",
    instagram: "https://www.instagram.com/wflsncrm/",
    website: null
  },
];

export function getCreativeByPath(path: string) {
  for (const index in creativesWithPages) {
    if (creativesWithPages[index].path === path) return creativesWithPages[index];
  }
}