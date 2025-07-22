let potteryIDCounter = 1;

export const makePottery = (shape, weight, height) => {
  let potteryID = potteryIDCounter;

  const pottery = {
    shape: `${shape}`,
    weight: `${weight}`,
    height: `${height}`,
    id: `${potteryID}`,
  };

  potteryIDCounter += 1;
  return pottery;
};

