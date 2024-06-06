export type RewardData = RewardItem[]

export type RewardItem = {
  id: number
  contractAddress: string
  type: string
  rootHash: string
  bannerHash?: string
  expDate: string
  name: string
  description: string
  detailsLink: any
  tagId?: number
  startDate: string
  reveal: boolean
  MultiGiveawayItems: MultiGiveawayItem[]
}

export type MultiGiveawayItem = {
  contractAddress: string
  type: string
  amount: string
  assetId?: string
  tokenId: string
  Asset?: Asset
}

export type Asset = {
  id: string
  name: string
  type: number
  supply: number
  previewHash: string
  blockchainId: string
  rarity: number
}

export {}
