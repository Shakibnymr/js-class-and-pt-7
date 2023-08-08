// count paper
/*
suppose, you have 3 books.first book takes 100pages to print
second book takes 200pages to print
third book takes 300pages to print
create a function called paperRequirements
and made with three parameteras named book1, book2, book3.
count the total pages needed.
*/ 
function paperRequirements(book1, book2,book3){
    const book1PR = book1 * 100;
    const book2PR = book2 * 200;
    const book3PR = book3 * 300;
    const totalPages = book1PR + book2PR + book3PR;
    console.log(totalPages);
}
paperRequirements(2,3,1);