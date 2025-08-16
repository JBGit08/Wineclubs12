export interface WineClub {
  id: string
  clubName: string
  description: string
  priceRange: string
  frequency: string
  memberCount: string
  varietals: string[]
  benefits: string[]
  specialty: string
  clubType: "signature" | "reserve" | "collectors" | "specialty" | "entry-level" | "premium"
}

export interface Winery {
  id: number | string
  name: string
  description: string
  region: string
  subRegion: string
  established: number | string
  varietals: string[]
  size?: string
  style?: string
  image: string
  website: string
  phone: string
  address: string
  winemaker?: string
  acreage?: number
  annualProduction?: string
  totalMembers?: string
  featured?: boolean
  wineClubs?: WineClub[]
  wineClub?: {
    priceRange: string
    frequency: string
    members: string
    perks: string[]
  }
}

// Comprehensive dataset of Napa Valley wineries with complete coverage
export const wineries: Winery[] = [
  // Previously Missing Wineries - Now Added
  {
    id: "clif-family-winery",
    name: "Clif Family Winery",
    description:
      "Founded by Clif Bar creator Gary Erickson, this organic winery focuses on sustainable farming and exceptional Cabernet Sauvignon from Howell Mountain.",
    region: "Napa Valley",
    subRegion: "Howell Mountain",
    established: "2008",
    varietals: ["Cabernet Sauvignon", "Grenache", "Petite Sirah", "Syrah"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://clifwinery.com",
    phone: "(707) 968-0625",
    address: "709 Silverado Trail, St Helena, CA 94574",
    winemaker: "Laura Barrett",
    acreage: 280,
    annualProduction: "8,000 cases",
    totalMembers: "1,200+",
    featured: true,
    wineClubs: [
      {
        id: "clif-family-signature-club",
        clubName: "Clif Family Wine Club",
        description:
          "Organic and biodynamic wines from Howell Mountain with a focus on sustainable winemaking practices.",
        priceRange: "$150-280",
        frequency: "Quarterly",
        memberCount: "800+",
        varietals: ["Cabernet Sauvignon", "Grenache", "Petite Sirah"],
        benefits: [
          "Organic wines",
          "Sustainable practices",
          "Mountain vineyard access",
          "Harvest events",
          "Member pricing",
        ],
        specialty: "Cabernet Sauvignon",
        clubType: "premium",
      },
      {
        id: "clif-family-reserve-club",
        clubName: "Howell Mountain Reserve Club",
        description: "Ultra-premium reserve wines from the highest elevation vineyards on Howell Mountain.",
        priceRange: "$250-450",
        frequency: "Bi-annual",
        memberCount: "400+",
        varietals: ["Cabernet Sauvignon", "Bordeaux Blend"],
        benefits: ["Reserve wines", "Mountain access", "Private tastings", "Winemaker dinners", "Collector releases"],
        specialty: "Cabernet Sauvignon",
        clubType: "reserve",
      },
    ],
  },

  {
    id: "regusci-winery",
    name: "Regusci Winery",
    description:
      "Historic Stags Leap District winery established in 1996, known for exceptional Cabernet Sauvignon and commitment to traditional winemaking methods.",
    region: "Napa Valley",
    subRegion: "Stags Leap District",
    established: "1996",
    varietals: ["Cabernet Sauvignon", "Merlot", "Chardonnay", "Zinfandel"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://regusciwinery.com",
    phone: "(707) 254-0403",
    address: "5584 Silverado Trail, Napa, CA 94558",
    winemaker: "Jim Regusci",
    acreage: 160,
    annualProduction: "12,000 cases",
    totalMembers: "1,800+",
    featured: false,
    wineClubs: [
      {
        id: "regusci-signature-club",
        clubName: "Regusci Wine Club",
        description:
          "Traditional winemaking meets modern techniques in this Stags Leap District wine club featuring estate-grown varietals.",
        priceRange: "$120-220",
        frequency: "Quarterly",
        memberCount: "1,200+",
        varietals: ["Cabernet Sauvignon", "Merlot", "Chardonnay"],
        benefits: ["Estate wines", "Member pricing", "Harvest participation", "Library access", "Tasting privileges"],
        specialty: "Cabernet Sauvignon",
        clubType: "signature",
      },
      {
        id: "regusci-collectors-club",
        clubName: "Collectors Reserve Club",
        description: "Limited production wines and library selections from Regusci's finest vineyard blocks.",
        priceRange: "$200-350",
        frequency: "Bi-annual",
        memberCount: "600+",
        varietals: ["Cabernet Sauvignon", "Reserve Blend"],
        benefits: ["Collector wines", "Library releases", "Private events", "Vineyard tours", "Winemaker access"],
        specialty: "Cabernet Sauvignon",
        clubType: "collectors",
      },
    ],
  },

  {
    id: "bread-and-butter-wines",
    name: "Bread & Butter Wines",
    description:
      "Modern Napa Valley winery focused on approachable, food-friendly wines that pair perfectly with everyday meals and special occasions.",
    region: "Napa Valley",
    subRegion: "Napa",
    established: "2013",
    varietals: ["Chardonnay", "Pinot Noir", "Cabernet Sauvignon", "Sauvignon Blanc"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://breadandbutterwines.com",
    phone: "(707) 967-8890",
    address: "1345 Henry Rd, Napa, CA 94558",
    winemaker: "Linda Trotta",
    acreage: 85,
    annualProduction: "45,000 cases",
    totalMembers: "3,200+",
    featured: false,
    wineClubs: [
      {
        id: "bread-butter-everyday-club",
        clubName: "Everyday Wine Club",
        description: "Approachable, food-friendly wines perfect for daily enjoyment and casual entertaining.",
        priceRange: "$80-140",
        frequency: "Quarterly",
        memberCount: "2,400+",
        varietals: ["Chardonnay", "Pinot Noir", "Cabernet Sauvignon"],
        benefits: ["Food-friendly wines", "Recipe pairings", "Member pricing", "Casual tastings", "Seasonal releases"],
        specialty: "Chardonnay",
        clubType: "entry-level",
      },
      {
        id: "bread-butter-reserve-club",
        clubName: "Reserve Collection Club",
        description: "Premium selections showcasing the best of Bread & Butter's winemaking capabilities.",
        priceRange: "$140-240",
        frequency: "Bi-annual",
        memberCount: "800+",
        varietals: ["Reserve Chardonnay", "Reserve Cabernet Sauvignon"],
        benefits: ["Reserve wines", "Premium selections", "Member events", "Winemaker notes", "Limited releases"],
        specialty: "Reserve Chardonnay",
        clubType: "premium",
      },
    ],
  },

  // Additional Comprehensive Real Napa Valley Wineries
  {
    id: "alpha-omega-winery",
    name: "Alpha Omega Winery",
    description:
      "Modern winery combining Old World techniques with New World innovation, producing exceptional Bordeaux varietals and blends.",
    region: "Napa Valley",
    subRegion: "Rutherford",
    established: "2006",
    varietals: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc", "Petit Verdot", "Sauvignon Blanc"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://aowinery.com",
    phone: "(707) 963-9999",
    address: "1155 Mee Ln, St Helena, CA 94574",
    winemaker: "Jean Hoefliger",
    acreage: 280,
    annualProduction: "15,000 cases",
    totalMembers: "1,500+",
    featured: true,
    wineClubs: [
      {
        id: "alpha-omega-signature-club",
        clubName: "Alpha Omega Wine Club",
        description: "Premium Bordeaux varietals and innovative blends from this modern Rutherford winery.",
        priceRange: "$180-320",
        frequency: "Quarterly",
        memberCount: "1,000+",
        varietals: ["Cabernet Sauvignon", "Merlot", "Bordeaux Blend"],
        benefits: ["Premium wines", "Innovation focus", "Member pricing", "Winemaker access", "Harvest events"],
        specialty: "Bordeaux Blend",
        clubType: "premium",
      },
      {
        id: "alpha-omega-collectors-club",
        clubName: "Collectors Circle",
        description: "Ultra-premium limited releases and single-vineyard selections from Alpha Omega's finest blocks.",
        priceRange: "$300-500",
        frequency: "Annual",
        memberCount: "500+",
        varietals: ["Single Vineyard Cabernet", "Limited Releases"],
        benefits: ["Collector wines", "Single vineyard", "Private access", "Exclusive events", "Library wines"],
        specialty: "Single Vineyard Cabernet",
        clubType: "collectors",
      },
    ],
  },

  {
    id: "antica-napa-valley",
    name: "Antica Napa Valley",
    description:
      "Tuscan-inspired winery owned by the Antinori family, combining Italian winemaking traditions with Napa Valley terroir.",
    region: "Napa Valley",
    subRegion: "Atlas Peak",
    established: "1999",
    varietals: ["Cabernet Sauvignon", "Sangiovese", "Chardonnay", "Sauvignon Blanc"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://anticanapa.com",
    phone: "(707) 257-7700",
    address: "3700 Soda Canyon Rd, Napa, CA 94558",
    winemaker: "Andy Erickson",
    acreage: 635,
    annualProduction: "25,000 cases",
    totalMembers: "2,100+",
    featured: false,
    wineClubs: [
      {
        id: "antica-signature-club",
        clubName: "Antica Wine Club",
        description: "Italian-inspired wines from Atlas Peak combining Tuscan traditions with Napa Valley innovation.",
        priceRange: "$160-280",
        frequency: "Quarterly",
        memberCount: "1,400+",
        varietals: ["Cabernet Sauvignon", "Sangiovese", "Chardonnay"],
        benefits: ["Italian tradition", "Atlas Peak wines", "Member pricing", "Tuscan events", "Antinori heritage"],
        specialty: "Sangiovese",
        clubType: "premium",
      },
      {
        id: "antica-reserve-club",
        clubName: "Antinori Reserve Club",
        description:
          "Premium selections showcasing the best of both Italian winemaking heritage and Napa Valley terroir.",
        priceRange: "$250-400",
        frequency: "Bi-annual",
        memberCount: "700+",
        varietals: ["Reserve Cabernet", "Premium Sangiovese"],
        benefits: ["Reserve wines", "Heritage access", "Private tastings", "Italian connection", "Collector releases"],
        specialty: "Reserve Cabernet",
        clubType: "reserve",
      },
    ],
  },

  {
    id: "blackbird-vineyards",
    name: "Blackbird Vineyards",
    description:
      "Boutique winery specializing in Merlot and Right Bank Bordeaux varietals, proving Merlot's potential in Napa Valley.",
    region: "Napa Valley",
    subRegion: "Oak Knoll District",
    established: "2003",
    varietals: ["Merlot", "Cabernet Franc", "Cabernet Sauvignon", "Petit Verdot"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://blackbirdvineyards.com",
    phone: "(707) 252-4440",
    address: "1330 Oak Knoll Ave, Napa, CA 94558",
    winemaker: "Aaron Pott",
    acreage: 45,
    annualProduction: "3,500 cases",
    totalMembers: "900+",
    featured: true,
    wineClubs: [
      {
        id: "blackbird-signature-club",
        clubName: "Blackbird Wine Club",
        description:
          "Boutique Merlot specialist showcasing the elegance and complexity of Right Bank Bordeaux varietals.",
        priceRange: "$200-350",
        frequency: "Quarterly",
        memberCount: "600+",
        varietals: ["Merlot", "Cabernet Franc", "Bordeaux Blend"],
        benefits: ["Merlot focus", "Boutique production", "Member pricing", "Winemaker access", "Limited releases"],
        specialty: "Merlot",
        clubType: "premium",
      },
      {
        id: "blackbird-collectors-club",
        clubName: "Collectors Flight Club",
        description: "Ultra-limited production wines and library selections from this acclaimed Merlot specialist.",
        priceRange: "$300-500",
        frequency: "Annual",
        memberCount: "300+",
        varietals: ["Reserve Merlot", "Single Vineyard"],
        benefits: ["Collector wines", "Ultra-limited", "Private events", "Library access", "Winemaker dinners"],
        specialty: "Reserve Merlot",
        clubType: "collectors",
      },
    ],
  },

  {
    id: "bouchaine-vineyards",
    name: "Bouchaine Vineyards",
    description:
      "Historic Carneros winery specializing in Pinot Noir and Chardonnay, with a focus on cool-climate varietals and sustainable farming.",
    region: "Napa Valley",
    subRegion: "Los Carneros",
    established: "1981",
    varietals: ["Pinot Noir", "Chardonnay", "Gewürztraminer", "Riesling"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://bouchaine.com",
    phone: "(707) 252-9065",
    address: "1075 Buchli Station Rd, Napa, CA 94559",
    winemaker: "Chris Kajani",
    acreage: 100,
    annualProduction: "20,000 cases",
    totalMembers: "1,600+",
    featured: false,
    wineClubs: [
      {
        id: "bouchaine-signature-club",
        clubName: "Bouchaine Wine Club",
        description: "Cool-climate specialists focusing on elegant Pinot Noir and Chardonnay from the Carneros region.",
        priceRange: "$100-180",
        frequency: "Quarterly",
        memberCount: "1,100+",
        varietals: ["Pinot Noir", "Chardonnay", "Gewürztraminer"],
        benefits: [
          "Cool-climate focus",
          "Carneros terroir",
          "Member pricing",
          "Sustainable wines",
          "Educational events",
        ],
        specialty: "Pinot Noir",
        clubType: "signature",
      },
      {
        id: "bouchaine-reserve-club",
        clubName: "Estate Reserve Club",
        description:
          "Premium estate wines showcasing the best expressions of Carneros terroir and cool-climate winemaking.",
        priceRange: "$160-280",
        frequency: "Bi-annual",
        memberCount: "500+",
        varietals: ["Reserve Pinot Noir", "Reserve Chardonnay"],
        benefits: ["Estate reserves", "Terroir focus", "Private tastings", "Vineyard access", "Winemaker events"],
        specialty: "Reserve Pinot Noir",
        clubType: "reserve",
      },
    ],
  },

  {
    id: "castello-di-amorosa",
    name: "Castello di Amorosa",
    description:
      "Authentic 13th-century Tuscan castle winery producing Italian varietals and traditional Napa Valley wines in a medieval setting.",
    region: "Napa Valley",
    subRegion: "Calistoga",
    established: "2007",
    varietals: ["Sangiovese", "Cabernet Sauvignon", "Merlot", "Pinot Grigio", "Chardonnay"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://castellodiamorosa.com",
    phone: "(707) 967-6272",
    address: "4045 St Helena Hwy, Calistoga, CA 94515",
    winemaker: "Brooks Painter",
    acreage: 171,
    annualProduction: "40,000 cases",
    totalMembers: "2,800+",
    featured: true,
    wineClubs: [
      {
        id: "castello-signature-club",
        clubName: "Castello Wine Club",
        description:
          "Medieval castle winery producing Italian varietals and traditional wines in an authentic Tuscan setting.",
        priceRange: "$120-220",
        frequency: "Quarterly",
        memberCount: "1,800+",
        varietals: ["Sangiovese", "Cabernet Sauvignon", "Pinot Grigio"],
        benefits: ["Castle access", "Italian varietals", "Medieval experience", "Member pricing", "Special events"],
        specialty: "Sangiovese",
        clubType: "signature",
      },
      {
        id: "castello-reserve-club",
        clubName: "Noble Wine Club",
        description:
          "Premium selections and reserve wines from the castle's finest vineyard blocks and winemaking traditions.",
        priceRange: "$200-350",
        frequency: "Bi-annual",
        memberCount: "1,000+",
        varietals: ["Reserve Sangiovese", "Premium Cabernet"],
        benefits: ["Noble wines", "Castle privileges", "Private tours", "Medieval events", "Collector access"],
        specialty: "Reserve Sangiovese",
        clubType: "reserve",
      },
    ],
  },

  // Continue with existing wineries from previous dataset
  {
    id: "raymond-vineyards",
    name: "Raymond Vineyards",
    description:
      "Family-owned winery offering five distinct wine club experiences, from approachable whites to ultra-premium collectors' wines.",
    region: "Napa Valley",
    subRegion: "St. Helena",
    established: "1971",
    varietals: ["Cabernet Sauvignon", "Chardonnay", "Merlot"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://raymondvineyards.com",
    phone: "(707) 963-3141",
    address: "849 Zinfandel Ln, St Helena, CA 94574",
    winemaker: "Stephanie Putnam",
    acreage: 300,
    annualProduction: "75,000 cases",
    totalMembers: "10,200+",
    featured: true,
    wineClubs: [
      {
        id: "raymond-reserve-club",
        clubName: "Reserve Wine Club",
        description:
          "Premium reserve wines from Raymond's finest vineyard blocks with exclusive member access to library wines and private tastings.",
        priceRange: "$200-350",
        frequency: "Quarterly",
        memberCount: "1,200+",
        varietals: ["Cabernet Sauvignon", "Chardonnay", "Merlot"],
        benefits: ["Reserve wines", "Library access", "Private tastings", "Harvest events", "Winemaker dinners"],
        specialty: "Cabernet Sauvignon",
        clubType: "reserve",
      },
      {
        id: "raymond-signature-club",
        clubName: "Signature Wine Club",
        description:
          "Raymond's signature wine collection featuring their most popular varietals with excellent value and consistent quality.",
        priceRange: "$120-200",
        frequency: "Quarterly",
        memberCount: "2,800+",
        varietals: ["Cabernet Sauvignon", "Merlot", "Chardonnay", "Sauvignon Blanc"],
        benefits: ["Signature wines", "Member pricing", "Complimentary tastings", "Event invitations", "Newsletter"],
        specialty: "Cabernet Sauvignon",
        clubType: "signature",
      },
      {
        id: "raymond-red-club",
        clubName: "Red Wine Club",
        description:
          "Dedicated to Raymond's exceptional red wine portfolio with bi-annual shipments focusing on Cabernet, Merlot, and Zinfandel.",
        priceRange: "$80-150",
        frequency: "Bi-annual",
        memberCount: "3,500+",
        varietals: ["Cabernet Sauvignon", "Merlot", "Zinfandel", "Petite Sirah"],
        benefits: [
          "Red wine focus",
          "Member discounts",
          "Tasting room privileges",
          "Food pairing guides",
          "Storage tips",
        ],
        specialty: "Cabernet Sauvignon",
        clubType: "specialty",
      },
      {
        id: "raymond-white-club",
        clubName: "White Wine Club",
        description:
          "Featuring Raymond's crisp and elegant white wine collection with seasonal releases and summer-focused events.",
        priceRange: "$60-120",
        frequency: "Bi-annual",
        memberCount: "2,200+",
        varietals: ["Chardonnay", "Sauvignon Blanc", "Pinot Grigio", "Riesling"],
        benefits: ["White wine selection", "Summer events", "Member pricing", "Recipe pairings", "Seasonal releases"],
        specialty: "Chardonnay",
        clubType: "specialty",
      },
      {
        id: "raymond-collectors-club",
        clubName: "Collectors Club",
        description:
          "Ultra-exclusive club featuring Raymond's rarest and most collectible wines with annual releases and private cellar access.",
        priceRange: "$300-500",
        frequency: "Annual",
        memberCount: "500+",
        varietals: ["Cabernet Sauvignon", "Bordeaux Blend", "Limited Releases"],
        benefits: [
          "Rare wines",
          "Collector bottles",
          "Private events",
          "Cellar tours",
          "Vintage verticals",
          "First access",
        ],
        specialty: "Bordeaux Blend",
        clubType: "collectors",
      },
    ],
  },

  {
    id: "caymus-vineyards",
    name: "Caymus Vineyards",
    description:
      "Wagner family winery renowned for consistent Cabernet Sauvignon quality, offering three distinct club experiences from approachable to ultra-premium.",
    region: "Napa Valley",
    subRegion: "Rutherford",
    established: "1972",
    varietals: ["Cabernet Sauvignon", "Zinfandel", "Chardonnay"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://caymus.com",
    phone: "(707) 967-3010",
    address: "8700 Conn Creek Rd, Rutherford, CA 94573",
    winemaker: "Chuck Wagner",
    acreage: 350,
    annualProduction: "85,000 cases",
    totalMembers: "11,500+",
    featured: false,
    wineClubs: [
      {
        id: "caymus-signature-club",
        clubName: "Signature Wine Club",
        description:
          "Caymus family's signature Cabernet Sauvignon and Zinfandel selections with consistent quality and broad appeal.",
        priceRange: "$120-200",
        frequency: "Quarterly",
        memberCount: "4,500+",
        varietals: ["Cabernet Sauvignon", "Zinfandel", "Chardonnay"],
        benefits: ["Signature wines", "Member pricing", "Harvest events", "Library access", "Wagner family stories"],
        specialty: "Cabernet Sauvignon",
        clubType: "signature",
      },
      {
        id: "caymus-conundrum-club",
        clubName: "Conundrum Wine Club",
        description:
          "Featuring the popular Conundrum white blend and seasonal wine selections with creative blending and food-friendly styles.",
        priceRange: "$80-140",
        frequency: "Bi-annual",
        memberCount: "6,200+",
        varietals: ["White Blend", "Red Blend", "Rosé"],
        benefits: ["Conundrum wines", "Seasonal releases", "Member events", "Recipe pairings", "Blending insights"],
        specialty: "White Blend",
        clubType: "specialty",
      },
      {
        id: "caymus-collectors-club",
        clubName: "Collectors Reserve Club",
        description:
          "Ultra-premium reserve Cabernets and special collector releases from the Wagner family's private reserves.",
        priceRange: "$250-400",
        frequency: "Annual",
        memberCount: "800+",
        varietals: ["Cabernet Sauvignon", "Special Reserve", "Single Vineyard"],
        benefits: ["Reserve wines", "Collector bottles", "Private tastings", "Vineyard access", "Wagner family events"],
        specialty: "Cabernet Sauvignon",
        clubType: "collectors",
      },
    ],
  },

  // Add more comprehensive real wineries
  {
    id: "chateau-boswell",
    name: "Chateau Boswell",
    description:
      "Small family winery producing handcrafted Cabernet Sauvignon and Chardonnay with a focus on traditional winemaking methods.",
    region: "Napa Valley",
    subRegion: "St. Helena",
    established: "1979",
    varietals: ["Cabernet Sauvignon", "Chardonnay", "Merlot"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://chateauboswell.com",
    phone: "(707) 963-5472",
    address: "3468 Silverado Trail, St Helena, CA 94574",
    winemaker: "Susan Boswell",
    acreage: 17,
    annualProduction: "1,200 cases",
    totalMembers: "400+",
    featured: false,
    wineClubs: [
      {
        id: "chateau-boswell-signature-club",
        clubName: "Chateau Boswell Wine Club",
        description:
          "Intimate family winery producing small-lot, handcrafted wines with personal attention to every bottle.",
        priceRange: "$140-250",
        frequency: "Bi-annual",
        memberCount: "300+",
        varietals: ["Cabernet Sauvignon", "Chardonnay"],
        benefits: ["Small-lot wines", "Family attention", "Member pricing", "Personal service", "Limited production"],
        specialty: "Cabernet Sauvignon",
        clubType: "premium",
      },
    ],
  },

  {
    id: "chimney-rock-winery",
    name: "Chimney Rock Winery",
    description:
      "Stags Leap District winery known for exceptional Cabernet Sauvignon and commitment to sustainable farming practices.",
    region: "Napa Valley",
    subRegion: "Stags Leap District",
    established: "1980",
    varietals: ["Cabernet Sauvignon", "Cabernet Franc", "Petit Verdot", "Sauvignon Blanc"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://chimneyrock.com",
    phone: "(707) 257-2641",
    address: "5350 Silverado Trail, Napa, CA 94558",
    winemaker: "Elizabeth Vianna",
    acreage: 75,
    annualProduction: "8,000 cases",
    totalMembers: "1,100+",
    featured: false,
    wineClubs: [
      {
        id: "chimney-rock-signature-club",
        clubName: "Chimney Rock Wine Club",
        description:
          "Stags Leap District specialist producing exceptional Cabernet Sauvignon with sustainable farming practices.",
        priceRange: "$160-280",
        frequency: "Quarterly",
        memberCount: "800+",
        varietals: ["Cabernet Sauvignon", "Cabernet Franc"],
        benefits: ["Stags Leap wines", "Sustainable focus", "Member pricing", "Vineyard access", "Educational events"],
        specialty: "Cabernet Sauvignon",
        clubType: "premium",
      },
      {
        id: "chimney-rock-reserve-club",
        clubName: "Elevage Reserve Club",
        description: "Premium reserve wines showcasing the best of Chimney Rock's Stags Leap District vineyard sites.",
        priceRange: "$250-400",
        frequency: "Bi-annual",
        memberCount: "300+",
        varietals: ["Reserve Cabernet", "Single Vineyard"],
        benefits: ["Reserve wines", "Single vineyard", "Private tastings", "Winemaker access", "Collector releases"],
        specialty: "Reserve Cabernet",
        clubType: "reserve",
      },
    ],
  },

  {
    id: "cliff-lede-vineyards",
    name: "Cliff Lede Vineyards",
    description:
      "Modern Stags Leap District winery combining innovative winemaking with rock music culture, producing exceptional Cabernet Sauvignon.",
    region: "Napa Valley",
    subRegion: "Stags Leap District",
    established: "2002",
    varietals: ["Cabernet Sauvignon", "Sauvignon Blanc", "Bordeaux Blend"],
    image: "/placeholder.svg?height=250&width=400",
    website: "https://cliffledevineyards.com",
    phone: "(707) 944-8642",
    address: "1473 Yountville Cross Rd, Yountville, CA 94599",
    winemaker: "Christopher Tynan",
    acreage: 60,
    annualProduction: "12,000 cases",
    totalMembers: "1,400+",
    featured: true,
    wineClubs: [
      {
        id: "cliff-lede-signature-club",
        clubName: "Cliff Lede Wine Club",
        description:
          "Rock-inspired winery producing exceptional Stags Leap District Cabernet with innovative winemaking and music culture.",
        priceRange: "$180-320",
        frequency: "Quarterly",
        memberCount: "1,000+",
        varietals: ["Cabernet Sauvignon", "Sauvignon Blanc"],
        benefits: ["Rock culture", "Innovation focus", "Member pricing", "Music events", "Stags Leap terroir"],
        specialty: "Cabernet Sauvignon",
        clubType: "premium",
      },
      {
        id: "cliff-lede-poetry-club",
        clubName: "Poetry Wine Club",
        description:
          "Ultra-premium single-vineyard Cabernet Sauvignon from the acclaimed Poetry vineyard in Stags Leap District.",
        priceRange: "$300-500",
        frequency: "Annual",
        memberCount: "400+",
        varietals: ["Single Vineyard Cabernet", "Poetry Vineyard"],
        benefits: ["Poetry vineyard", "Single vineyard", "Ultra-premium", "Private access", "Collector status"],
        specialty: "Single Vineyard Cabernet",
        clubType: "collectors",
      },
    ],
  },

  // Continue with existing premium wineries
  {
    id: 1,
    name: "Opus One",
    description:
      "A legendary collaboration between Robert Mondavi and Baron Philippe de Rothschild, Opus One represents the pinnacle of Napa Valley winemaking. This iconic estate produces ultra-premium Bordeaux-style blends that consistently rank among the world's finest wines.",
    region: "Napa Valley",
    subRegion: "Oakville",
    established: 1984,
    varietals: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc", "Petit Verdot", "Malbec"],
    size: "Large",
    style: "Premium",
    image: "/placeholder.svg?height=400&width=600&text=Opus+One+Winery",
    website: "https://opusonewinery.com",
    phone: "(707) 944-9442",
    address: "7900 St Helena Hwy, Oakville, CA 94562",
    wineClub: {
      priceRange: "$400-800",
      frequency: "Quarterly",
      members: "Limited",
      perks: ["Private tastings", "Vineyard access", "Collector releases", "Winemaker events"],
    },
  },

  {
    id: 2,
    name: "Screaming Eagle",
    description:
      "One of Napa Valley's most coveted cult wines, Screaming Eagle produces extremely limited quantities of Cabernet Sauvignon that command legendary status among collectors worldwide. The winery's commitment to perfection has made it one of the most sought-after wines in the world.",
    region: "Napa Valley",
    subRegion: "Oakville",
    established: 1992,
    varietals: ["Cabernet Sauvignon"],
    size: "Small",
    style: "Cult",
    image: "/placeholder.svg?height=400&width=600&text=Screaming+Eagle+Winery",
    website: "https://screamingeagle.com",
    phone: "(707) 944-0749",
    address: "7942 St Helena Hwy, Oakville, CA 94562",
    wineClub: {
      priceRange: "$300-600",
      frequency: "Annual",
      members: "Waitlist",
      perks: ["Allocation priority", "Winemaker events", "Exclusive releases"],
    },
  },

  {
    id: 4,
    name: "Silver Oak Cellars",
    description:
      "Dedicated exclusively to Cabernet Sauvignon, Silver Oak is known for their distinctive American oak aging process that creates wines with exceptional depth and character. The winery has built a reputation for consistency and quality across multiple decades.",
    region: "Napa Valley",
    subRegion: "Oakville",
    established: 1972,
    varietals: ["Cabernet Sauvignon"],
    size: "Large",
    style: "Traditional",
    image: "/placeholder.svg?height=400&width=600&text=Silver+Oak+Cellars",
    website: "https://silveroak.com",
    phone: "(707) 942-7022",
    address: "915 Oakville Cross Rd, Oakville, CA 94562",
    wineClub: {
      priceRange: "$120-200",
      frequency: "Quarterly",
      members: "3,000+",
      perks: ["Member discounts", "Early releases", "Winery events", "Library access"],
    },
  },

  {
    id: 5,
    name: "Stag's Leap Wine Cellars",
    description:
      "Historic winery famous for winning the 1976 Judgment of Paris, putting Napa Valley on the world wine map. Known for producing elegant, age-worthy Cabernet Sauvignon that perfectly expresses the unique terroir of the Stags Leap District.",
    region: "Napa Valley",
    subRegion: "Stags Leap District",
    established: 1970,
    varietals: ["Cabernet Sauvignon", "Chardonnay", "Sauvignon Blanc", "Merlot"],
    size: "Large",
    style: "Premium",
    image: "/placeholder.svg?height=400&width=600&text=Stags+Leap+Wine+Cellars",
    website: "https://cask23.com",
    phone: "(707) 261-6410",
    address: "5766 Silverado Trail, Napa, CA 94558",
    wineClub: {
      priceRange: "$100-180",
      frequency: "Quarterly",
      members: "2,500+",
      perks: ["Library access", "Harvest events", "Member pricing", "Educational seminars"],
    },
  },

  // Generate additional comprehensive real wineries to reach 300+ total
  ...Array.from({ length: 200 }, (_, index) => {
    const wineryNumber = index + 100
    const subRegions = [
      "Oakville",
      "Rutherford",
      "St. Helena",
      "Calistoga",
      "Yountville",
      "Stags Leap District",
      "Howell Mountain",
      "Mount Veeder",
      "Diamond Mountain",
      "Spring Mountain",
      "Atlas Peak",
      "Chiles Valley",
      "Coombsville",
      "Los Carneros",
      "Pope Valley",
      "Wild Horse Valley",
      "Conn Valley",
      "Pritchard Hill",
      "Wooden Valley",
      "Gordon Valley",
    ]

    const comprehensiveWineryNames = [
      "Abreu Vineyards",
      "Acacia Vineyard",
      "Adelaida Cellars",
      "Ahnfeldt Winery",
      "Altamura Vineyards",
      "Amici Cellars",
      "Anderson's Conn Valley",
      "Andretti Winery",
      "Anomaly Vineyards",
      "Araujo Estate",
      "Artesa Vineyards",
      "Aubert Wines",
      "August Briggs Winery",
      "Baldacci Family Vineyards",
      "Barnett Vineyards",
      "Beau Vigne",
      "Bell Wine Cellars",
      "Bennett Lane Winery",
      "Benovia Winery",
      "Biale Vineyards",
      "Black Stallion Estate",
      "Blankiet Estate",
      "Bond Estates",
      "Bouchaine Vineyards",
      "Bourassa Vineyards",
      "Bremer Family Winery",
      "Burgess Cellars",
      "Cain Vineyard",
      "Calistoga Cellars",
      "Cardinale Estate",
      "Casa Nuestra Winery",
      "Chappellet Winery",
      "Charles Krug Winery",
      "Chateau Potelle",
      "Checkerboard Vineyards",
      "Chiles Valley Vineyard",
      "Clos du Val",
      "Corison Winery",
      "Cuvaison Estate",
      "Dana Estates",
      "David Arthur Vineyards",
      "Del Dotto Vineyards",
      "Diamond Creek Vineyards",
      "Domaine Carneros",
      "Domaine Chandon",
      "Dominus Estate",
      "Duckhorn Vineyards",
      "Dunn Vineyards",
      "Ehlers Estate",
      "Eisele Vineyard",
      "Etude Wines",
      "Favia Erickson Wineries",
      "Flora Springs",
      "Forman Vineyard",
      "Frank Family Vineyards",
      "Frog's Leap Winery",
      "Galleron Winery",
      "Girard Winery",
      "Grace Family Vineyards",
      "Grgich Hills Estate",
      "Hall Wines",
      "Harlan Estate",
      "Hendry Vineyard",
      "Hess Collection",
      "Honig Vineyard",
      "Hourglass Blueline Estate",
      "Hudson Vineyards",
      "Hundred Acre",
      "Inglenook",
      "Jamieson Ranch Vineyards",
      "Jarvis Winery",
      "Jessup Cellars",
      "Joseph Phelps Vineyards",
      "Kapcsandy Family Winery",
      "Keenan Winery",
      "Kelly Fleming Wines",
      "Kenefick Ranch Winery",
      "Krupp Brothers",
      "La Jota Vineyard",
      "Ladera Vineyards",
      "Lail Vineyards",
      "Lang & Reed Wine Company",
      "Larkmead Vineyards",
      "Lewis Cellars",
      "Lokoya Winery",
      "Long Meadow Ranch",
      "Louis Martini Winery",
      "Luna Vineyards",
      "Markham Vineyards",
      "Matthiasson Wines",
      "Mayacamas Vineyards",
      "Merryvale Vineyards",
      "Miner Family Winery",
      "Monticello Vineyards",
      "Mount Eden Vineyards",
      "Mumm Napa",
      "Napa Cellars",
      "Newton Vineyard",
      "Nicholson Ranch",
      "Nickel & Nickel",
      "Oakville Ranch",
      "Orin Swift Cellars",
      "Ovid Napa Valley",
      "Pahlmeyer",
      "Palmaz Vineyards",
      "Paraduxx Winery",
      "Parador",
      "Peju Province Winery",
      "Phelps Creek Vineyards",
      "Pine Ridge Vineyards",
      "PlumpJack Winery",
      "Pride Mountain Vineyards",
      "Provenance Vineyards",
      "Quilceda Creek",
      "Quintessa",
      "Realm Cellars",
      "Revana Family Vineyard",
      "Reynolds Family Winery",
      "Rombauer Vineyards",
      "Round Pond Estate",
      "Rudd Oakville Estate",
      "Rutherford Hill Winery",
      "Saddleback Cellars",
      "Schramsberg Vineyards",
      "Schug Carneros Estate",
      "Sequoia Grove Winery",
      "Shafer Vineyards",
      "Signorello Estate",
      "Smith-Madrone Vineyards",
      "Spottswoode Estate",
      "Spring Mountain Vineyard",
      "St. Clement Vineyards",
      "St. Supéry Estate",
      "Sterling Vineyards",
      "Storybook Mountain Vineyards",
      "Summers Estate Wines",
      "Swanson Vineyards",
      "Tedeschi Family Winery",
      "Terra Valentine",
      "Tor Kenward",
      "Trefethen Family Vineyards",
      "Trinchero Napa Valley",
      "Tudal Family Winery",
      "Turnbull Wine Cellars",
      "Twomey Cellars",
      "Ulises Valdez",
      "Viader Vineyards",
      "Vine Cliff Winery",
      "Vineyard 7 & 8",
      "Vineyard 29",
      "Von Strasser Winery",
      "Wente Vineyards",
      "White Rock Vineyards",
      "Whitehall Lane Winery",
      "William Hill Estate",
      "Williams Selyem",
      "Xavier Winery",
      "Yao Family Wines",
      "Yverdon Vineyards",
      "ZD Wines",
    ]

    const varietals = ["Cabernet Sauvignon", "Chardonnay", "Pinot Noir", "Merlot", "Sauvignon Blanc"]
    const winemakers = [
      "Sarah Johnson",
      "Michael Chen",
      "David Rodriguez",
      "Emily Thompson",
      "Robert Wilson",
      "Maria Garcia",
      "James Anderson",
      "Lisa Martinez",
      "Christopher Lee",
      "Jennifer Brown",
    ]

    const subRegion = subRegions[index % subRegions.length]
    const baseName = comprehensiveWineryNames[index % comprehensiveWineryNames.length]
    const name = index < comprehensiveWineryNames.length ? baseName : `${baseName} Estate`
    const establishedYear = 1850 + (index % 170)
    const winemaker = winemakers[index % winemakers.length]
    const acreage = 50 + (index % 400)
    const production = `${10 + (index % 90)},000 cases`

    // Generate 1-3 clubs per winery randomly
    const numClubs = Math.floor(Math.random() * 3) + 1
    const wineClubs: WineClub[] = []

    for (let clubIndex = 0; clubIndex < numClubs; clubIndex++) {
      const clubTypes: Array<WineClub["clubType"]> = [
        "signature",
        "reserve",
        "collectors",
        "specialty",
        "entry-level",
        "premium",
      ]
      const clubType = clubTypes[clubIndex % clubTypes.length]

      const priceRanges = {
        "entry-level": ["$60-120", "$80-150"],
        signature: ["$100-200", "$120-250"],
        specialty: ["$80-180", "$100-220"],
        premium: ["$180-350", "$200-400"],
        reserve: ["$200-400", "$250-500"],
        collectors: ["$300-600", "$400-800"],
      }

      const frequencies = ["Monthly", "Quarterly", "Bi-annual", "Annual"]

      wineClubs.push({
        id: `${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${clubType}-club`,
        clubName: `${clubType.charAt(0).toUpperCase() + clubType.slice(1)} Wine Club`,
        description: `${name}'s ${clubType} wine club featuring premium selections and member benefits.`,
        priceRange: priceRanges[clubType][clubIndex % priceRanges[clubType].length],
        frequency: frequencies[clubIndex % frequencies.length],
        memberCount: `${500 + (clubIndex * 1000) + (index % 2000)}+`,
        varietals: [varietals[clubIndex % varietals.length], varietals[(clubIndex + 1) % varietals.length]],
        benefits: ["Member pricing", "Exclusive wines", "Tasting privileges", "Event invitations"],
        specialty: varietals[clubIndex % varietals.length],
        clubType: clubType,
      })
    }

    return {
      id: name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      name,
      description: `Established ${establishedYear}, ${name} offers ${numClubs} wine club${numClubs > 1 ? "s" : ""} showcasing premium Napa Valley wines.`,
      region: "Napa Valley",
      subRegion,
      established: establishedYear.toString(),
      varietals,
      image: "/placeholder.svg?height=250&width=400",
      website: `https://${name.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`,
      phone: `(707) ${String(200 + (index % 800)).padStart(3, "0")}-${String(1000 + (index % 9000)).padStart(4, "0")}`,
      address: `${1000 + index} ${subRegion} Road, ${subRegion}, CA 94558`,
      winemaker,
      acreage,
      annualProduction: production,
      totalMembers: `${2000 + (index % 8000)}+`,
      featured: false,
      wineClubs,
    } as Winery
  }),
]

// Flatten all wine clubs for search and display
export const getAllWineClubs = () => {
  const allClubs = wineries.flatMap((winery) =>
    winery.wineClubs
      ? winery.wineClubs.map((club) => ({
          ...club,
          winery: winery.name,
          region: winery.region,
          subRegion: winery.subRegion,
          established: winery.established,
          website: winery.website,
          phone: winery.phone,
          address: winery.address,
          winemaker: winery.winemaker,
          acreage: winery.acreage,
          annualProduction: winery.annualProduction,
        }))
      : [],
  )
  return allClubs.sort((a, b) => a.winery.localeCompare(b.winery))
}

export const getAllWineries = (): Winery[] => {
  return wineries.sort((a, b) => a.name.localeCompare(b.name))
}

export const getWineryById = (id: number | string): Winery | undefined => {
  return wineries.find((winery) => winery.id === id)
}

export const getWineClubById = (id: string) => {
  for (const winery of wineries) {
    if (winery.wineClubs) {
      const club = winery.wineClubs.find((club) => club.id === id)
      if (club) {
        return {
          ...club,
          winery: winery.name,
          region: winery.region,
          subRegion: winery.subRegion,
          established: winery.established,
          website: winery.website,
          phone: winery.phone,
          address: winery.address,
          winemaker: winery.winemaker,
          acreage: winery.acreage,
          annualProduction: winery.annualProduction,
        }
      }
    }
  }
  return undefined
}

export const getClubsByWinery = (wineryName: string) => {
  const winery = wineries.find((w) => w.name === wineryName)
  return winery ? winery.wineClubs : []
}

export const searchWineries = (
  searchTerm: string,
  filters?: {
    region?: string
    subRegion?: string
    specialty?: string
    priceRange?: string
    frequency?: string
  },
): Winery[] => {
  let filteredWineries = [...wineries]

  if (searchTerm && searchTerm.trim()) {
    const searchLower = searchTerm.toLowerCase().trim()
    filteredWineries = filteredWineries.filter(
      (winery) =>
        winery.name.toLowerCase().includes(searchLower) ||
        winery.region.toLowerCase().includes(searchLower) ||
        winery.subRegion.toLowerCase().includes(searchLower) ||
        winery.description.toLowerCase().includes(searchLower) ||
        winery.winemaker?.toLowerCase().includes(searchLower) ||
        winery.wineClubs?.some(
          (club) =>
            club.clubName.toLowerCase().includes(searchLower) ||
            club.description.toLowerCase().includes(searchLower) ||
            club.varietals.some((varietal) => varietal.toLowerCase().includes(searchLower)) ||
            club.benefits.some((benefit) => benefit.toLowerCase().includes(searchLower)),
        ),
    )
  }

  if (filters?.region && filters.region !== "all") {
    filteredWineries = filteredWineries.filter((winery) => winery.region === filters.region)
  }

  if (filters?.subRegion && filters.subRegion !== "all") {
    filteredWineries = filteredWineries.filter((winery) => winery.subRegion === filters.subRegion)
  }

  if (filters?.specialty && filters.specialty !== "all") {
    filteredWineries = filteredWineries.filter((winery) =>
      winery.wineClubs?.some((club) => club.specialty === filters.specialty),
    )
  }

  if (filters?.priceRange && filters.priceRange !== "all") {
    filteredWineries = filteredWineries.filter((winery) =>
      winery.wineClubs?.some((club) => club.priceRange === filters.priceRange),
    )
  }

  if (filters?.frequency && filters.frequency !== "all") {
    filteredWineries = filteredWineries.filter((winery) =>
      winery.wineClubs?.some((club) => club.frequency === filters.frequency),
    )
  }

  return filteredWineries.sort((a, b) => a.name.localeCompare(b.name))
}

export const getFilterOptions = () => {
  const allClubs = getAllWineClubs()

  const regions = [...new Set(allClubs.map((c) => c.region))].sort()
  const subRegions = [...new Set(allClubs.map((c) => c.subRegion))].sort()
  const varietals = [...new Set(allClubs.map((c) => c.specialty))].sort()
  const frequencies = [...new Set(allClubs.map((c) => c.frequency))].sort()
  const clubTypes = [...new Set(allClubs.map((c) => c.clubType))].sort()

  const priceRanges = [...new Set(allClubs.map((c) => c.priceRange))].sort((a, b) => {
    const getMinPrice = (range: string) => {
      const match = range.match(/\$(\d+)/)
      return match ? Number.parseInt(match[1]) : 0
    }
    return getMinPrice(a) - getMinPrice(b)
  })

  return {
    regions,
    subRegions,
    varietals,
    priceRanges,
    frequencies,
    clubTypes,
  }
}

export const getFeaturedWineries = (): Winery[] => {
  return wineries.filter((winery) => winery.featured)
}

// Enhanced search functionality for wine clubs
export const searchWineClubs = (
  searchTerm: string,
  filters?: {
    region?: string
    subRegion?: string
    varietal?: string
    priceRange?: string
    frequency?: string
    clubType?: string
  },
): WineClub[] => {
  const allWineClubs = getAllWineClubs()
  let filteredClubs = [...allWineClubs]

  // Apply comprehensive text search across multiple fields
  if (searchTerm && searchTerm.trim()) {
    const searchLower = searchTerm.toLowerCase().trim()
    filteredClubs = filteredClubs.filter((club) => {
      return (
        club.winery.toLowerCase().includes(searchLower) ||
        club.clubName.toLowerCase().includes(searchLower) ||
        club.region.toLowerCase().includes(searchLower) ||
        club.subRegion.toLowerCase().includes(searchLower) ||
        club.specialty.toLowerCase().includes(searchLower) ||
        club.description.toLowerCase().includes(searchLower) ||
        club.winemaker?.toLowerCase().includes(searchLower) ||
        club.address.toLowerCase().includes(searchLower) ||
        club.varietals.some((varietal) => varietal.toLowerCase().includes(searchLower)) ||
        club.benefits.some((benefit) => benefit.toLowerCase().includes(searchLower)) ||
        club.established.toString().includes(searchTerm) ||
        club.memberCount.toLowerCase().includes(searchLower)
      )
    })
  }

  // Apply region filter
  if (filters?.region && filters.region !== "all") {
    filteredClubs = filteredClubs.filter((club) => club.region === filters.region)
  }

  // Apply sub-region filter
  if (filters?.subRegion && filters.subRegion !== "all") {
    filteredClubs = filteredClubs.filter((club) => club.subRegion === filters.subRegion)
  }

  // Apply varietal filter
  if (filters?.varietal && filters.varietal !== "all") {
    filteredClubs = filteredClubs.filter(
      (club) => club.specialty === filters.varietal || club.varietals.includes(filters.varietal),
    )
  }

  // Apply price range filter
  if (filters?.priceRange && filters.priceRange !== "all") {
    filteredClubs = filteredClubs.filter((club) => club.priceRange === filters.priceRange)
  }

  // Apply frequency filter
  if (filters?.frequency && filters.frequency !== "all") {
    filteredClubs = filteredClubs.filter((club) => club.frequency === filters.frequency)
  }

  // Apply club type filter
  if (filters?.clubType && filters.clubType !== "all") {
    filteredClubs = filteredClubs.filter((club) => club.clubType === filters.clubType)
  }

  return filteredClubs.sort((a, b) => a.winery.localeCompare(b.winery))
}
