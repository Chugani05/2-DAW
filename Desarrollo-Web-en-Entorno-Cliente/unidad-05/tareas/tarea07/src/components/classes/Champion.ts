interface ChampionStats {
  health: number
  attack: number
  speed: number
}

export interface Champion {
  id: number
  name: string
  role: string
  stats: ChampionStats
  level: number
  image: string
}
