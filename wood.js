function woodCalculator (chairQuantity, tableQuantity, bedQuantity){
    
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    
    totalWood = chairWood + bedWood + tableWood;
    return totalWood;
}
const total = woodCalculator(1,1,1);
console.log(total)