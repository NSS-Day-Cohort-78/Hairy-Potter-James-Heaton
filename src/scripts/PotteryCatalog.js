let potteryForSale = [];

export const toSellOrNotToSell = (pieceOfPottery) => {
  // pieceOfPottery.price = ``;

  if (pieceOfPottery.weight >= 6 && pieceOfPottery.cracked === false) {
    pieceOfPottery.price = 40;
  }
  if (pieceOfPottery.weight < 6 && pieceOfPottery.cracked === false) {
    pieceOfPottery.price = 20;
  }
  if (pieceOfPottery.cracked === false) {
    potteryForSale.push(pieceOfPottery);
  }

  return pieceOfPottery
};
