// ----- utility helpers -----
export function getAllWineClubs() {
  return wineClubs
}

export function searchWineClubs(searchTerm = "", filters: any = {}) {
  let results = wineClubs

  // simple text search
  if (searchTerm.trim()) {
    const q = searchTerm.toLowerCase()
    results = results.filter(
      (c) =>
        c.winery.toLowerCase().includes(q) ||
        c.clubName.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.varietals.some((v) => v.toLowerCase().includes(q)) ||
        c.region.toLowerCase().includes(q) ||
        c.subRegion.toLowerCase().includes(q),
    )
  }

  // field filters
  if (filters.region) results = results.filter((c) => c.region === filters.region)
  if (filters.subRegion) results = results.filter((c) => c.subRegion === filters.subRegion)
  if (filters.varietal) results = results.filter((c) => c.varietals.includes(filters.varietal))
  if (filters.priceRange) results = results.filter((c) => c.priceRange === filters.priceRange)
  if (filters.frequency) results = results.filter((c) => c.frequency === filters.frequency)
  if (filters.clubType) results = results.filter((c) => c.clubType === filters.clubType)

  return results
}

export function getWineClubFilterOptions() {
  return {
    regions: Array.from(new Set(wineClubs.map((c) => c.region))).sort(),
    subRegions: Array.from(new Set(wineClubs.map((c) => c.subRegion))).sort(),
    varietals: Array.from(new Set(wineClubs.flatMap((c) => c.varietals))).sort(),
    priceRanges: Array.from(new Set(wineClubs.map((c) => c.priceRange))).sort(),
    frequencies: Array.from(new Set(wineClubs.map((c) => c.frequency))).sort(),
    clubTypes: Array.from(new Set(wineClubs.map((c) => c.clubType))).sort(),
  }
}

const wineClubs = [
  {
    winery: "Alpha Omega",
    clubName: "Collectors Club",
    description:
      "The Collectors Club is Alpha Omega's most exclusive wine club, offering members access to the winery's most limited-production wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Chardonnay"],
    region: "Napa Valley",
    subRegion: "Rutherford",
    priceRange: "$$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.aowinery.com/wine-clubs/",
  },
  {
    winery: "Amici Cellars",
    clubName: "The Society",
    description:
      "The Society is Amici Cellars' premier wine club, offering members access to the winery's most sought-after wines. Members receive four bottles of wine three times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Pinot Noir", "Chardonnay"],
    region: "Napa Valley",
    subRegion: "Calistoga",
    priceRange: "$$$",
    frequency: "Tri-Annually",
    clubType: "Red & White",
    link: "https://www.amicicellars.com/wine-club/",
  },
  {
    winery: "Antica Napa Valley",
    clubName: "The Estate Collection",
    description:
      "The Estate Collection is Antica Napa Valley's flagship wine club, offering members access to the winery's most exclusive wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Sangiovese", "Chardonnay"],
    region: "Napa Valley",
    subRegion: "Atlas Peak",
    priceRange: "$$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.anticanapavalley.com/wine-club/",
  },
  {
    winery: "Artesa Vineyards & Winery",
    clubName: "The Limited Release Club",
    description:
      "The Limited Release Club is Artesa Vineyards & Winery's most exclusive wine club, offering members access to the winery's most limited-production wines. Members receive three bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Pinot Noir", "Chardonnay", "Albariño"],
    region: "Napa Valley",
    subRegion: "Carneros",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.artesawinery.com/wine-club/",
  },
  {
    winery: "Baldacci Family Vineyards",
    clubName: "The Founders Club",
    description:
      "The Founders Club is Baldacci Family Vineyards' premier wine club, offering members access to the winery's most sought-after wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Chardonnay"],
    region: "Napa Valley",
    subRegion: "Stags Leap District",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.baldaccivineyards.com/wine-club/",
  },
  {
    winery: "Beaulieu Vineyard (BV)",
    clubName: "The Maestro Collection",
    description:
      "The Maestro Collection is Beaulieu Vineyard's most exclusive wine club, offering members access to the winery's most limited-production wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Chardonnay"],
    region: "Napa Valley",
    subRegion: "Rutherford",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.bvwines.com/wine-club/",
  },
  {
    winery: "Beringer Vineyards",
    clubName: "The Collectors' Circle",
    description:
      "The Collectors' Circle is Beringer Vineyards' premier wine club, offering members access to the winery's most sought-after wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Chardonnay", "Zinfandel"],
    region: "Napa Valley",
    subRegion: "St. Helena",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.beringer.com/wine-club/",
  },
  {
    winery: "Cakebread Cellars",
    clubName: "The Cakebread Cellars Wine Club",
    description:
      "The Cakebread Cellars Wine Club offers members access to the winery's most popular wines. Members receive six bottles of wine twice per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Chardonnay", "Sauvignon Blanc"],
    region: "Napa Valley",
    subRegion: "Rutherford",
    priceRange: "$$$",
    frequency: "Bi-Annually",
    clubType: "Red & White",
    link: "https://www.cakebread.com/wine-club/",
  },
  {
    winery: "Castello di Amorosa",
    clubName: "Il Barone",
    description:
      "Il Barone is Castello di Amorosa's premier wine club, offering members access to the winery's most sought-after wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Sangiovese", "Merlot"],
    region: "Napa Valley",
    subRegion: "Calistoga",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red Only",
    link: "https://www.castellodiamorosa.com/wine-club/",
  },
  {
    winery: "Caymus Vineyards",
    clubName: "The Connoisseur's Club",
    description:
      "The Connoisseur's Club is Caymus Vineyards' most exclusive wine club, offering members access to the winery's most limited-production wines. Members receive three bottles of wine twice per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon"],
    region: "Napa Valley",
    subRegion: "Rutherford",
    priceRange: "$$$$",
    frequency: "Bi-Annually",
    clubType: "Red Only",
    link: "https://www.caymus.com/wine-club/",
  },
  {
    winery: "Chateau Montelena",
    clubName: "The Montelena Estate Club",
    description:
      "The Montelena Estate Club is Chateau Montelena's premier wine club, offering members access to the winery's most sought-after wines. Members receive six bottles of wine three times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Chardonnay", "Zinfandel"],
    region: "Napa Valley",
    subRegion: "Calistoga",
    priceRange: "$$$",
    frequency: "Tri-Annually",
    clubType: "Red & White",
    link: "https://www.montelena.com/wine-club/",
  },
  {
    winery: "Cliff Lede Vineyards",
    clubName: "The Backstage Pass",
    description:
      "The Backstage Pass is Cliff Lede Vineyards' most exclusive wine club, offering members access to the winery's most limited-production wines. Members receive three bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Sauvignon Blanc"],
    region: "Napa Valley",
    subRegion: "Yountville",
    priceRange: "$$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.cliffledevineyards.com/wine-club/",
  },
  {
    winery: "Clos Du Val",
    clubName: "Le Clos",
    description:
      "Le Clos is Clos Du Val's premier wine club, offering members access to the winery's most sought-after wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Chardonnay"],
    region: "Napa Valley",
    subRegion: "Napa",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.closduval.com/wine-club/",
  },
  {
    winery: "Domaine Carneros",
    clubName: "Le Rêve",
    description:
      "Le Rêve is Domaine Carneros' most exclusive wine club, offering members access to the winery's most limited-production sparkling wines. Members receive three bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Sparkling Wine", "Pinot Noir"],
    region: "Napa Valley",
    subRegion: "Carneros",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Sparkling",
    link: "https://www.domainecarneros.com/wine-club/",
  },
  {
    winery: "Duckhorn Vineyards",
    clubName: "The Duckhorn Portfolio Wine Club",
    description:
      "The Duckhorn Portfolio Wine Club offers members access to wines from Duckhorn Vineyards and its sister wineries. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Sauvignon Blanc"],
    region: "Napa Valley",
    subRegion: "St. Helena",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.duckhorn.com/wine-club/",
  },
  {
    winery: "Far Niente",
    clubName: "The Dolce Club",
    description:
      "The Dolce Club is Far Niente's most exclusive wine club, offering members access to the winery's most limited-production dessert wine. Members receive two bottles of wine twice per year, along with invitations to exclusive events and tastings.",
    varietals: ["Late Harvest Semillon"],
    region: "Napa Valley",
    subRegion: "Oakville",
    priceRange: "$$$$",
    frequency: "Bi-Annually",
    clubType: "Dessert",
    link: "https://farniente.com/wine-club/",
  },
  {
    winery: "Frog's Leap Winery",
    clubName: "The Leap Club",
    description:
      "The Leap Club is Frog's Leap Winery's premier wine club, offering members access to the winery's most sought-after wines. Members receive six bottles of wine twice per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Sauvignon Blanc", "Zinfandel"],
    region: "Napa Valley",
    subRegion: "Rutherford",
    priceRange: "$$$",
    frequency: "Bi-Annually",
    clubType: "Red & White",
    link: "https://www.frogsleap.com/wine-club/",
  },
  {
    winery: "Grgich Hills Estate",
    clubName: "The Cellar Club",
    description:
      "The Cellar Club is Grgich Hills Estate's premier wine club, offering members access to the winery's most sought-after wines. Members receive six bottles of wine three times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Chardonnay", "Zinfandel"],
    region: "Napa Valley",
    subRegion: "Rutherford",
    priceRange: "$$$",
    frequency: "Tri-Annually",
    clubType: "Red & White",
    link: "https://www.grgich.com/wine-club/",
  },
  {
    winery: "Hall Wines",
    clubName: "The Platinum Collection",
    description:
      "The Platinum Collection is Hall Wines' most exclusive wine club, offering members access to the winery's most limited-production wines. Members receive three bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Sauvignon Blanc"],
    region: "Napa Valley",
    subRegion: "St. Helena",
    priceRange: "$$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.hallwines.com/wine-club/",
  },
  {
    winery: "Heitz Cellar",
    clubName: "The Legacy Club",
    description:
      "The Legacy Club is Heitz Cellar's premier wine club, offering members access to the winery's most sought-after wines. Members receive six bottles of wine twice per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Chardonnay"],
    region: "Napa Valley",
    subRegion: "St. Helena",
    priceRange: "$$$",
    frequency: "Bi-Annually",
    clubType: "Red & White",
    link: "https://www.heitzcellar.com/wine-club/",
  },
  {
    winery: "Honig Vineyard & Winery",
    clubName: "The Bees Knees Wine Club",
    description:
      "The Bees Knees Wine Club offers members access to Honig Vineyard & Winery's most popular wines. Members receive four bottles of wine three times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Sauvignon Blanc", "Cabernet Sauvignon"],
    region: "Napa Valley",
    subRegion: "Rutherford",
    priceRange: "$$$",
    frequency: "Tri-Annually",
    clubType: "Red & White",
    link: "https://www.honigwine.com/wine-club/",
  },
  {
    winery: "Inglenook",
    clubName: "The Rubicon Society",
    description:
      "The Rubicon Society is Inglenook's premier wine club, offering members access to the winery's most sought-after wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc"],
    region: "Napa Valley",
    subRegion: "Rutherford",
    priceRange: "$$$$",
    frequency: "Quarterly",
    clubType: "Red Only",
    link: "https://www.inglenook.com/wine-club/",
  },
  {
    winery: "Joseph Phelps Vineyards",
    clubName: "The Insignia Wine Club",
    description:
      "The Insignia Wine Club is Joseph Phelps Vineyards' most exclusive wine club, offering members access to the winery's flagship wine, Insignia. Members receive three bottles of wine twice per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Petit Verdot", "Merlot"],
    region: "Napa Valley",
    subRegion: "St. Helena",
    priceRange: "$$$$",
    frequency: "Bi-Annually",
    clubType: "Red Only",
    link: "https://www.josephphelps.com/wine-club/",
  },
  {
    winery: "Kenzo Estate",
    clubName: "The Rindo Club",
    description:
      "The Rindo Club is Kenzo Estate's premier wine club, offering members access to the winery's most sought-after wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Sauvignon Blanc"],
    region: "Napa Valley",
    subRegion: "Napa",
    priceRange: "$$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.kenzoestate.com/wine-club/",
  },
  {
    winery: "Merryvale Vineyards",
    clubName: "The Profile Collection",
    description:
      "The Profile Collection is Merryvale Vineyards' most exclusive wine club, offering members access to the winery's most limited-production wines. Members receive three bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Petit Verdot"],
    region: "Napa Valley",
    subRegion: "St. Helena",
    priceRange: "$$$$",
    frequency: "Quarterly",
    clubType: "Red Only",
    link: "https://www.merryvale.com/wine-club/",
  },
  {
    winery: "Nickel & Nickel",
    clubName: "The Single-Vineyard Wine Club",
    description:
      "The Single-Vineyard Wine Club offers members access to Nickel & Nickel's single-vineyard Cabernet Sauvignon wines. Members receive three bottles of wine twice per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon"],
    region: "Napa Valley",
    subRegion: "Oakville",
    priceRange: "$$$$",
    frequency: "Bi-Annually",
    clubType: "Red Only",
    link: "https://www.nickelandnickel.com/wine-club/",
  },
  {
    winery: "Opus One",
    clubName: "The Ovation",
    description:
      "The Ovation is Opus One's most exclusive wine club, offering members access to the winery's flagship wine, Opus One. Members receive three bottles of wine once per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc"],
    region: "Napa Valley",
    subRegion: "Oakville",
    priceRange: "$$$$$",
    frequency: "Annually",
    clubType: "Red Only",
    link: "https://www.opusonewinery.com/wine-club/",
  },
  {
    winery: "Orin Swift Cellars",
    clubName: "The Cellar Dweller",
    description:
      "The Cellar Dweller is Orin Swift Cellars' premier wine club, offering members access to the winery's most sought-after wines. Members receive four bottles of wine three times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Red Blends", "Zinfandel", "Petite Sirah"],
    region: "Napa Valley",
    subRegion: "St. Helena",
    priceRange: "$$$",
    frequency: "Tri-Annually",
    clubType: "Red Only",
    link: "https://www.orinswift.com/wine-club/",
  },
  {
    winery: "Paraduxx",
    clubName: "The Duckhorn Portfolio Wine Club",
    description:
      "The Duckhorn Portfolio Wine Club offers members access to wines from Paraduxx and its sister wineries. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Red Blends", "Zinfandel", "Cabernet Sauvignon"],
    region: "Napa Valley",
    subRegion: "Napa",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red Only",
    link: "https://www.paraduxx.com/wine-club/",
  },
  {
    winery: "Pine Ridge Vineyards",
    clubName: "The Forefront Wine Club",
    description:
      "The Forefront Wine Club is Pine Ridge Vineyards' premier wine club, offering members access to the winery's most sought-after wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc"],
    region: "Napa Valley",
    subRegion: "Stags Leap District",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red Only",
    link: "https://www.pineridgevineyards.com/wine-club/",
  },
  {
    winery: "Robert Mondavi Winery",
    clubName: "The Collectors Club",
    description:
      "The Collectors Club is Robert Mondavi Winery's most exclusive wine club, offering members access to the winery's most limited-production wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Sauvignon Blanc"],
    region: "Napa Valley",
    subRegion: "Oakville",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.robertmondaviwinery.com/wine-club/",
  },
  {
    winery: "Rombauer Vineyards",
    clubName: "The Rombauer Wine Club",
    description:
      "The Rombauer Wine Club offers members access to Rombauer Vineyards' most popular wines. Members receive six bottles of wine twice per year, along with invitations to exclusive events and tastings.",
    varietals: ["Chardonnay", "Cabernet Sauvignon", "Zinfandel"],
    region: "Napa Valley",
    subRegion: "St. Helena",
    priceRange: "$$$",
    frequency: "Bi-Annually",
    clubType: "Red & White",
    link: "https://www.rombauer.com/wine-club/",
  },
  {
    winery: "Round Pond Estate",
    clubName: "The Estate Club",
    description:
      "The Estate Club is Round Pond Estate's premier wine club, offering members access to the winery's most sought-after wines and olive oils. Members receive four bottles of wine and a selection of olive oils three times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Sauvignon Blanc", "Olive Oil"],
    region: "Napa Valley",
    subRegion: "Rutherford",
    priceRange: "$$$",
    frequency: "Tri-Annually",
    clubType: "Red & White",
    link: "https://www.roundpond.com/wine-club/",
  },
  {
    winery: "Schramsberg Vineyards",
    clubName: "The Schramsberg Wine Club",
    description:
      "The Schramsberg Wine Club offers members access to Schramsberg Vineyards' sparkling wines. Members receive three bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Sparkling Wine"],
    region: "Napa Valley",
    subRegion: "Calistoga",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Sparkling",
    link: "https://www.schramsberg.com/wine-club/",
  },
  {
    winery: "Shafer Vineyards",
    clubName: "The Hillside Select Club",
    description:
      "The Hillside Select Club is Shafer Vineyards' most exclusive wine club, offering members access to the winery's flagship wine, Hillside Select. Members receive three bottles of wine once per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon"],
    region: "Napa Valley",
    subRegion: "Stags Leap District",
    priceRange: "$$$$$",
    frequency: "Annually",
    clubType: "Red Only",
    link: "https://www.shafervineyards.com/wine-club/",
  },
  {
    winery: "Spottswoode Estate Vineyard & Winery",
    clubName: "The Spottswoode Wine Club",
    description:
      "The Spottswoode Wine Club offers members access to Spottswoode Estate Vineyard & Winery's most popular wines. Members receive six bottles of wine twice per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Sauvignon Blanc"],
    region: "Napa Valley",
    subRegion: "St. Helena",
    priceRange: "$$$$",
    frequency: "Bi-Annually",
    clubType: "Red & White",
    link: "https://www.spottswoode.com/wine-club/",
  },
  {
    winery: "St. Supéry Estate Vineyards & Winery",
    clubName: "The Élu Wine Club",
    description:
      "The Élu Wine Club is St. Supéry Estate Vineyards & Winery's premier wine club, offering members access to the winery's most sought-after wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Sauvignon Blanc", "Merlot"],
    region: "Napa Valley",
    subRegion: "Rutherford",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.stsupery.com/wine-club/",
  },
  {
    winery: "Stag's Leap Wine Cellars",
    clubName: "The Stag's Leap Wine Cellars Wine Club",
    description:
      "The Stag's Leap Wine Cellars Wine Club offers members access to the winery's most popular wines. Members receive six bottles of wine twice per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Chardonnay"],
    region: "Napa Valley",
    subRegion: "Stags Leap District",
    priceRange: "$$$",
    frequency: "Bi-Annually",
    clubType: "Red & White",
    link: "https://www.stagsleapwinecellars.com/wine-club/",
  },
  {
    winery: "Sterling Vineyards",
    clubName: "The Diamond Mountain Reserve Club",
    description:
      "The Diamond Mountain Reserve Club is Sterling Vineyards' most exclusive wine club, offering members access to the winery's most limited-production wines. Members receive three bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon"],
    region: "Napa Valley",
    subRegion: "Calistoga",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red Only",
    link: "https://www.sterlingvineyards.com/wine-club/",
  },
  {
    winery: "Trefethen Family Vineyards",
    clubName: "The Trefethen Wine Club",
    description:
      "The Trefethen Wine Club offers members access to Trefethen Family Vineyards' most popular wines. Members receive six bottles of wine twice per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Chardonnay", "Riesling"],
    region: "Napa Valley",
    subRegion: "Oak Knoll District",
    priceRange: "$$$",
    frequency: "Bi-Annually",
    clubType: "Red & White",
    link: "https://www.trefethen.com/wine-club/",
  },
  {
    winery: "Whitehall Lane Winery",
    clubName: "The Leonardini Estates Wine Club",
    description:
      "The Leonardini Estates Wine Club offers members access to Whitehall Lane Winery's and its sister wineries' most popular wines. Members receive six bottles of wine four times per year, along with invitations to exclusive events and tastings.",
    varietals: ["Cabernet Sauvignon", "Merlot", "Sauvignon Blanc"],
    region: "Napa Valley",
    subRegion: "Rutherford",
    priceRange: "$$$",
    frequency: "Quarterly",
    clubType: "Red & White",
    link: "https://www.whitehalllane.com/wine-club/",
  },
]
