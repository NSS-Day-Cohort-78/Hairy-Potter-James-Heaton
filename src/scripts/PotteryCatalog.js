let potteryForSale = [];

export const toSellOrNotToSell = (pieceOfPottery) => {
  if (pieceOfPottery.weight >= 6 && pieceOfPottery.cracked === false) {
    pieceOfPottery.price = 40;
  }
  if (pieceOfPottery.weight < 6 && pieceOfPottery.cracked === false) {
    pieceOfPottery.price = 20;
  }
  if (pieceOfPottery.cracked === false) {
    potteryForSale.push(pieceOfPottery);
  }
  return pieceOfPottery;
};

export const potteryForSaleList = () => {
  let potteryForSaleClone = structuredClone(potteryForSale);
  return potteryForSaleClone;
};
