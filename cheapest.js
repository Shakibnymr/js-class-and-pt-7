const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },
    {name: 'iphone', camera: 10, storage: '32gb', price: 86000, color: 'silver' },
    {name: 'Xiomi', camera: 30, storage: '32gb', price: 52000, color: 'silver' },
    {name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'silver' },
    {name: 'Nokia', camera: 45, storage: '32gb', price: 44000, color: 'silver' },
    {name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'silver' },
];

function cheapestPhone (phones){
    let highest = phones[0];
for(let i = 0; i<phones.length; i++){
    const phone = phones[i];
    if (phone.camera > highest.camera) {
        highest = phone;
    }

}
return highest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);
