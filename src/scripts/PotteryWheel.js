let potteryIDCounter = 1;

export const makePottery = (shape, weight, height) => {
  let potteryID = potteryIDCounter;

  const pottery = {
    id: `${potteryID}`,
    shape: `${shape}`,
    weight: `${weight}`,
    height: `${height}`,
  };

  potteryIDCounter += 1;
  return pottery;
};

