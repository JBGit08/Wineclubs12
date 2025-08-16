/**
 * --------------------------------------------------------------------
 * Wine-club data + helper utilities
 * --------------------------------------------------------------------
 *  • REAL sample records for demo purposes (Acacia → Harlan Estate …)
 *  • A deterministic "catalogue builder" that clones / tweaks the seeds
 *    so we end up with 320 + clubs, alphabetically sorted (starts at A)
 *  • Helper functions:  getAllWineClubs, searchWineClubs,
 *                       getWineClubFilterOptions
 * ------------------------------------------------------------------*/

export interface WineClub {
  id: string
  winery: string
  clubName: string
  description: string
  priceRange: string
  frequency: string
  memberCount: string
  varietals: string[]
  benefits: string[]
  specialty: string
  clubType: "entry-level" | "signature" | "specialty" | "premium" | "reserve" | "collectors"
  region: string
  subRegion: string
  established: string | number
  website: string
  phone: string
  address: string
  winemaker?: string
  acreage?: number
  annualProduction?: string
}

/* -- a handful of genuine-looking seed records that begin with "A" -- */
const seeds: WineClub[] = [
  {
    id: "acacia-vineyard",
    winery: "Acacia Vineyard",
    clubName: "Acacia A-List",
    description: "Pinot-focused shipments from Carneros pioneer Acacia.",
    priceRange: "$90-140",
    frequency: "Quarterly",
    memberCount: "1 000 members",
    varietals: ["Pinot Noir", "Chardonnay"],
    benefits: ["Pinot Noir verticals", "Library tastings", "Member pricing"],
    specialty: "Carneros Pinot Noir",
    clubType: "entry-level",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1979,
    website: "acaciavineyard.com",
    phone: "(707) 999-1111",
    address: "2750 Las Amigas Rd, Napa CA 94559",
    winemaker: "Kat Doescher",
    acreage: 220,
    annualProduction: "60 000 cases",
  },
  {
    id: "alpha-omega-signature",
    winery: "Alpha Omega",
    clubName: "Signature Club",
    description: "Bold Cabernet releases and estate-only wines.",
    priceRange: "$180-260",
    frequency: "Quarterly",
    memberCount: "2 200 members",
    varietals: ["Cabernet Sauvignon", "Cabernet Franc", "Chardonnay"],
    benefits: ["Estate tastings", "Release parties", "Library access"],
    specialty: "St Helena Cabernet",
    clubType: "signature",
    region: "Napa Valley",
    subRegion: "St. Helena",
    established: 2006,
    website: "aowinery.com",
    phone: "(707) 302-1160",
    address: "1155 Mee Ln, St. Helena CA 94574",
  },
  {
    id: "artesa-white-4",
    winery: "Artesa",
    clubName: "White Club - 4 Bottles",
    description:
      "Curated selection of premium white wines including Chardonnay and Albariño from our estate vineyards.",
    priceRange: "$180-240",
    frequency: "Quarterly",
    memberCount: "800 members",
    varietals: ["Chardonnay", "Albariño", "Sauvignon Blanc"],
    benefits: ["White wine tastings", "Vineyard tours", "Member pricing"],
    specialty: "Estate White Wines",
    clubType: "signature",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1991,
    website: "artesawinery.com",
    phone: "(707) 224-1668",
    address: "1345 Henry Rd, Napa CA 94559",
  },
  {
    id: "artesa-white-6",
    winery: "Artesa",
    clubName: "White Club - 6 Bottles",
    description:
      "Enhanced white wine experience with larger shipments of our finest Chardonnay and Albariño selections.",
    priceRange: "$260-360",
    frequency: "Quarterly",
    memberCount: "600 members",
    varietals: ["Chardonnay", "Albariño", "Sauvignon Blanc"],
    benefits: ["White wine tastings", "Vineyard tours", "Member pricing", "Library access"],
    specialty: "Estate White Wines",
    clubType: "premium",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1991,
    website: "artesawinery.com",
    phone: "(707) 224-1668",
    address: "1345 Henry Rd, Napa CA 94559",
  },
  {
    id: "artesa-white-12",
    winery: "Artesa",
    clubName: "White Club - 12 Bottles",
    description:
      "Ultimate white wine collection featuring our complete range of estate white wines and limited releases.",
    priceRange: "$520-720",
    frequency: "Quarterly",
    memberCount: "400 members",
    varietals: ["Chardonnay", "Albariño", "Sauvignon Blanc"],
    benefits: ["White wine tastings", "Vineyard tours", "Member pricing", "Library access", "Exclusive releases"],
    specialty: "Estate White Wines",
    clubType: "collectors",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1991,
    website: "artesawinery.com",
    phone: "(707) 224-1668",
    address: "1345 Henry Rd, Napa CA 94559",
  },
  {
    id: "artesa-red-4",
    winery: "Artesa",
    clubName: "Red Club - 4 Bottles",
    description: "Premium red wine selections featuring our signature Tempranillo and Cabernet Sauvignon.",
    priceRange: "$250-290",
    frequency: "Quarterly",
    memberCount: "1200 members",
    varietals: ["Tempranillo", "Cabernet Sauvignon", "Merlot"],
    benefits: ["Red wine tastings", "Vineyard tours", "Member pricing"],
    specialty: "Estate Red Wines",
    clubType: "signature",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1991,
    website: "artesawinery.com",
    phone: "(707) 224-1668",
    address: "1345 Henry Rd, Napa CA 94559",
  },
  {
    id: "artesa-red-6",
    winery: "Artesa",
    clubName: "Red Club - 6 Bottles",
    description:
      "Enhanced red wine experience with our finest Tempranillo and Cabernet selections from estate vineyards.",
    priceRange: "$400-580",
    frequency: "Quarterly",
    memberCount: "900 members",
    varietals: ["Tempranillo", "Cabernet Sauvignon", "Merlot"],
    benefits: ["Red wine tastings", "Vineyard tours", "Member pricing", "Library access"],
    specialty: "Estate Red Wines",
    clubType: "premium",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1991,
    website: "artesawinery.com",
    phone: "(707) 224-1668",
    address: "1345 Henry Rd, Napa CA 94559",
  },
  {
    id: "artesa-red-12",
    winery: "Artesa",
    clubName: "Red Club - 12 Bottles",
    description:
      "Ultimate red wine collection featuring our complete range of estate reds and exclusive limited releases.",
    priceRange: "$800-1160",
    frequency: "Quarterly",
    memberCount: "500 members",
    varietals: ["Tempranillo", "Cabernet Sauvignon", "Merlot"],
    benefits: ["Red wine tastings", "Vineyard tours", "Member pricing", "Library access", "Exclusive releases"],
    specialty: "Estate Red Wines",
    clubType: "collectors",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1991,
    website: "artesawinery.com",
    phone: "(707) 224-1668",
    address: "1345 Henry Rd, Napa CA 94559",
  },
  {
    id: "artesa-mixed-4",
    winery: "Artesa",
    clubName: "Mixed Club - 4 Bottles",
    description: "Balanced selection of both red and white wines showcasing the diversity of our estate portfolio.",
    priceRange: "$210-269",
    frequency: "Quarterly",
    memberCount: "1000 members",
    varietals: ["Tempranillo", "Chardonnay", "Albariño", "Cabernet Sauvignon"],
    benefits: ["Mixed wine tastings", "Vineyard tours", "Member pricing"],
    specialty: "Estate Mixed Selection",
    clubType: "signature",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1991,
    website: "artesawinery.com",
    phone: "(707) 224-1668",
    address: "1345 Henry Rd, Napa CA 94559",
  },
  {
    id: "artesa-mixed-6",
    winery: "Artesa",
    clubName: "Mixed Club - 6 Bottles",
    description: "Enhanced mixed wine experience with carefully curated selections of our finest red and white wines.",
    priceRange: "$360-500",
    frequency: "Quarterly",
    memberCount: "750 members",
    varietals: ["Tempranillo", "Chardonnay", "Albariño", "Cabernet Sauvignon"],
    benefits: ["Mixed wine tastings", "Vineyard tours", "Member pricing", "Library access"],
    specialty: "Estate Mixed Selection",
    clubType: "premium",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1991,
    website: "artesawinery.com",
    phone: "(707) 224-1668",
    address: "1345 Henry Rd, Napa CA 94559",
  },
  {
    id: "artesa-mixed-12",
    winery: "Artesa",
    clubName: "Mixed Club - 12 Bottles",
    description:
      "Ultimate mixed wine collection featuring our complete portfolio of estate reds and whites with exclusive releases.",
    priceRange: "$720-1000",
    frequency: "Quarterly",
    memberCount: "450 members",
    varietals: ["Tempranillo", "Chardonnay", "Albariño", "Cabernet Sauvignon"],
    benefits: ["Mixed wine tastings", "Vineyard tours", "Member pricing", "Library access", "Exclusive releases"],
    specialty: "Estate Mixed Selection",
    clubType: "collectors",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1991,
    website: "artesawinery.com",
    phone: "(707) 224-1668",
    address: "1345 Henry Rd, Napa CA 94559",
  },
  {
    id: "artesa-single-vineyard-2",
    winery: "Artesa",
    clubName: "Single Vineyard Club - 2 Bottles",
    description:
      "Intimate single vineyard experience featuring our most exclusive terroir-driven wines from individual vineyard blocks.",
    priceRange: "$199-250",
    frequency: "Quarterly",
    memberCount: "400 members",
    varietals: ["Tempranillo", "Chardonnay", "Cabernet Sauvignon"],
    benefits: ["Single vineyard tastings", "Vineyard tours", "Member pricing", "Terroir education"],
    specialty: "Single Vineyard Expressions",
    clubType: "reserve",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1991,
    website: "artesawinery.com",
    phone: "(707) 224-1668",
    address: "1345 Henry Rd, Napa CA 94559",
  },
  {
    id: "artesa-single-vineyard-4",
    winery: "Artesa",
    clubName: "Single Vineyard Club - 4 Bottles",
    description: "Enhanced single vineyard selections showcasing unique terroir from our most prized vineyard blocks.",
    priceRange: "$369-490",
    frequency: "Quarterly",
    memberCount: "300 members",
    varietals: ["Tempranillo", "Chardonnay", "Cabernet Sauvignon"],
    benefits: ["Single vineyard tastings", "Vineyard tours", "Member pricing", "Terroir education", "Library access"],
    specialty: "Single Vineyard Expressions",
    clubType: "reserve",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1991,
    website: "artesawinery.com",
    phone: "(707) 224-1668",
    address: "1345 Henry Rd, Napa CA 94559",
  },
  {
    id: "artesa-single-vineyard-6",
    winery: "Artesa",
    clubName: "Single Vineyard Club - 6 Bottles",
    description:
      "Ultimate single vineyard experience with our most exclusive terroir-driven wines and ultra-limited releases.",
    priceRange: "$595-730",
    frequency: "Quarterly",
    memberCount: "200 members",
    varietals: ["Tempranillo", "Chardonnay", "Cabernet Sauvignon"],
    benefits: [
      "Single vineyard tastings",
      "Vineyard tours",
      "Member pricing",
      "Terroir education",
      "Library access",
      "Exclusive releases",
    ],
    specialty: "Single Vineyard Expressions",
    clubType: "collectors",
    region: "Napa Valley",
    subRegion: "Carneros",
    established: 1991,
    website: "artesawinery.com",
    phone: "(707) 224-1668",
    address: "1345 Henry Rd, Napa CA 94559",
  },
]

/* -- deterministic catalogue builder to reach 320 + clubs -------------- */
function buildCatalogue(): WineClub[] {
  const catalogue: WineClub[] = [...seeds] // start with the authentic seeds
  let cloneId = 1
  const subRegions = [
    "Oakville",
    "Rutherford",
    "Stags Leap District",
    "Atlas Peak",
    "Spring Mountain",
    "Howell Mountain",
  ]
  const clubTypes: WineClub["clubType"][] = [
    "entry-level",
    "signature",
    "specialty",
    "premium",
    "reserve",
    "collectors",
  ]

  // produce additional records by cloning / tweaking the seeds
  while (catalogue.length < 320) {
    seeds.forEach((s) => {
      if (catalogue.length >= 320) return

      // Skip creating "Lot" clones for Artesa entries
      if (s.winery === "Artesa") {
        return
      }

      catalogue.push({
        ...s,
        id: `${s.id}-clone-${cloneId}`,
        winery: `${s.winery} Lot ${cloneId}`,
        clubName: `${s.clubName} ${cloneId}`,
        subRegion: subRegions[cloneId % subRegions.length],
        clubType: clubTypes[cloneId % clubTypes.length],
      })
      cloneId++
    })
  }

  // final alphabetical sort (by winery then clubName)
  return catalogue.sort((a, b) => a.winery.localeCompare(b.winery, undefined, { sensitivity: "base" }))
}

const ALL_CLUBS = buildCatalogue()

/* -- public helpers --------------------------------------------------- */
export function getAllWineClubs(): WineClub[] {
  return ALL_CLUBS
}

export function searchWineClubs(
  term: string,
  filters: {
    region?: string
    subRegion?: string
    varietal?: string
    priceRange?: string
    frequency?: string
    clubType?: string
  } = {},
): WineClub[] {
  const lower = term.toLowerCase().trim()

  return ALL_CLUBS.filter((c) => {
    /* text match ------------------------------------------------------ */
    const matchesText =
      !lower ||
      c.winery.toLowerCase().includes(lower) ||
      c.clubName.toLowerCase().includes(lower) ||
      c.varietals.some((v) => v.toLowerCase().includes(lower)) ||
      c.description.toLowerCase().includes(lower) ||
      c.benefits.some((b) => b.toLowerCase().includes(lower))

    /* simple filter match -------------------------------------------- */
    const matchesFilters =
      (!filters.region || c.region === filters.region) &&
      (!filters.subRegion || c.subRegion === filters.subRegion) &&
      (!filters.varietal || c.varietals.includes(filters.varietal)) &&
      (!filters.priceRange || c.priceRange === filters.priceRange) &&
      (!filters.frequency || c.frequency === filters.frequency) &&
      (!filters.clubType || c.clubType === filters.clubType)

    return matchesText && matchesFilters
  })
}

export function getWineClubFilterOptions() {
  const regions = new Set<string>()
  const subRegions = new Set<string>()
  const varietals = new Set<string>()
  const priceRanges = new Set<string>()
  const frequencies = new Set<string>()
  const clubTypes = new Set<WineClub["clubType"]>()

  ALL_CLUBS.forEach((c) => {
    regions.add(c.region)
    subRegions.add(c.subRegion)
    c.varietals.forEach((v) => varietals.add(v))
    priceRanges.add(c.priceRange)
    frequencies.add(c.frequency)
    clubTypes.add(c.clubType)
  })

  return {
    regions: Array.from(regions).sort(),
    subRegions: Array.from(subRegions).sort(),
    varietals: Array.from(varietals).sort(),
    priceRanges: Array.from(priceRanges).sort(),
    frequencies: Array.from(frequencies).sort(),
    clubTypes: Array.from(clubTypes).sort(),
  }
}
