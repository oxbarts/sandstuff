import { rewardNfts, type RewardNft } from '@/data/reward-nfts.ts'
import { toSlug } from '@/lib/utils.ts'

function validate(nfts: RewardNft[]) {
  const tokenIds = new Set()
  const tsbIds = new Set()

  nfts.forEach(nft => {
    if (tokenIds.has(nft.tokenId)) {
      console.log(`- Duplicate tokenId: ${nft.tokenId}`)
    }
    tokenIds.add(nft.tokenId)

    if (nft.tsbId !== null && tsbIds.has(nft.tsbId)) {
      console.log(`- Duplicate tsbId: ${nft.tsbId}`)
    }
    tsbIds.add(nft.tsbId)

    const generatedSlug = toSlug(nft.name)
    if (nft.tsbSlug && nft.tsbSlug !== generatedSlug) {
      console.log(`- Unusual slugfor ${nft.name}: ${nft.tsbSlug} <> ${generatedSlug}`)
    }
  })
}

validate(rewardNfts)
