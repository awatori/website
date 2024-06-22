export interface CircleList {
  title: string; // en.json var name
  list: string[]; // en.json var name
}

export const ourExpertise: CircleList[] = [
  {
    title: "market",
    list: ["brand-dev", "market-consul", "e-commerce", "wholesale"]
  },
  {
    title: "events",
    list: ["event-planning", "vendor-source", "concept-creation", "community-engage", "exhibition"]
  },
  {
    title: "creator",
    list: ["collab-manage", "artist-manage", "artists-intro", "sourcing-consul", "creative-sourcing"]
  }
]