function woodReq(ShirtQuantity, pantQuantity, shoeQuantity){
    const perShirt = 500;
    const perPant = 300;
    const perShoe = 2000;
    const shirtWood = perShirt * ShirtQuantity;
    const pantWood = perPant * pantQuantity;
    const shoeWood = perShoe * shoeQuantity;
    const totalWood = shirtWood + pantWood + shoeWood;
    return totalWood;
}
const wood = woodReq (5, 2, 1);
console.log (wood);