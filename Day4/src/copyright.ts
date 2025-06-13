// Original JS Code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

// 1st variation

// let year: HTMLElement | null;

// year = document.getElementById("year");
// let thisYear: string = new Date().getFullYear().toString();
// year?.setAttribute("datetime", thisYear);
// if(year){
//     year.textContent = thisYear;
// }


// 2nd variation
let year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;