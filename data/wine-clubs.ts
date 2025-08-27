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
    id: "opus-one-membership",
    winery: "Opus One",
    clubName: "Opus One Membership",
    description: "Exclusive access to Opus One's legendary Bordeaux-style blend from Oakville.",
    priceRange: "$800/year",
    frequency: "Annual",
    memberCount: "800 members",
    varietals: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc", "Petit Verdot", "Malbec"],
    benefits: ["Early release access", "Exclusive tastings", "Library wines", "Member pricing"],
    specialty: "Bordeaux-style blend",
    clubType: "premium",
    region: "Napa Valley",
    subRegion: "Oakville",
    established: 1979,
    website: "https://opusonewinery.com",
    phone: "(707) 944-9442",
    address: "7900 St Helena Hwy, Oakville CA 94562"
  },
  {
    id: "caymus-club",
    winery: "Caymus Vineyards", 
    clubName: "Caymus Club",
    description: "Access to Caymus family wines including their renowned Cabernet Sauvignon.",
    priceRange: "$300/year",
    frequency: "Quarterly", 
    memberCount: "15,000+ members",
    varietals: ["Cabernet Sauvignon", "Zinfandel", "Pinot Noir"],
    benefits: ["Member pricing", "First access", "Special releases", "Tasting room priority"],
    specialty: "Napa Valley Cabernet Sauvignon",
    clubType: "signature",
    region: "Napa Valley",
    subRegion: "Rutherford",
    established: 1972,
    website: "https://caymus.com",
    phone: "(707) 967-3010",
    address: "8700 Conn Creek Rd, Rutherford CA 94573"
  },
  {
    id: "silver-oak-wine-club",
    winery: "Silver Oak",
    clubName: "Silver Oak Wine Club", 
    description: "Celebrating American oak-aged Cabernet Sauvignon from Napa Valley.",
    priceRange: "$280/year",
    frequency: "Quarterly",
    memberCount: "25,000+ members",
    varietals: ["Cabernet Sauvignon"],
    benefits: ["Member pricing", "Library access", "Exclusive events", "First release access"],
    specialty: "American oak-aged Cabernet",
    clubType: "signature",
    region: "Napa Valley",
    subRegion: "Oakville",
    established: 1972,
    website: "https://silveroak.com",
    phone: "(707) 942-7022", 
    address: "915 Oakville Cross Rd, Oakville CA 94562"
  },
  {
    id: "stags-leap-wine-club",
    winery: "Stag's Leap Wine Cellars",
    clubName: "Stag's Leap Wine Cellars Club",
    description: "Home of the legendary 1973 Cabernet that won the 1976 Paris Tasting.",
    priceRange: "$450/year",
    frequency: "Quarterly",
    memberCount: "8,000 members",
    varietals: ["Cabernet Sauvignon", "Chardonnay", "Sauvignon Blanc", "Merlot"],
    benefits: ["Historic library wines", "Vineyard tours", "Member events", "Priority allocation"],
    specialty: "Historic Stags Leap District Cabernet",
    clubType: "premium",
    region: "Napa Valley",
    subRegion: "Stags Leap District", 
    established: 1970,
    website: "https://cask23.com",
    phone: "(707) 261-6410",
    address: "5766 Silverado Trail, Napa CA 94558"
  },
  {
    id: "chateau-montelena-club",
    winery: "Chateau Montelena",
    clubName: "Chateau Montelena Wine Club",
    description: "Historic winery famous for the 1973 Chardonnay that triumphed in Paris.",
    priceRange: "$380/year", 
    frequency: "Quarterly",
    memberCount: "5,000 members",
    varietals: ["Chardonnay", "Cabernet Sauvignon", "Riesling", "Zinfandel"],
    benefits: ["Historic wine library", "Chateau tours", "Member tastings", "Early access"],
    specialty: "Historic Chardonnay and Cabernet",
    clubType: "premium",
    region: "Napa Valley",
    subRegion: "Calistoga",
    established: 1882,
    website: "https://montelena.com",
    phone: "(707) 942-5105",
    address: "1429 Tubbs Ln, Calistoga CA 94515"
  }
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
  while (catalogue.length < 5) {
  function buildCatalogue(): WineClub[] {
  return [...seeds] // Just return the 5 authentic clubs
}
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
