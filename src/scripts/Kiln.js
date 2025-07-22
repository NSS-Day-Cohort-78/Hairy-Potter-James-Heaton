export const firePottery = (pieceOfPottery, fireTemp) => {
    pieceOfPottery.fired = true
    pieceOfPottery.cracked = false

    if (fireTemp > 2200) {
        pieceOfPottery.cracked = true
    }

    return pieceOfPottery
}