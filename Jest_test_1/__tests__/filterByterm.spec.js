const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
    test("it should filter by a search term(link)", () => {
         const input = [
            { id: 1, url: "https://wwww.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
         ]; 
         
         const output = [ { id: 3, url: "https://www.link3.dev" } ]

         expect(filterByTerm(input, "link")).toEqual(output); 
         expect(filterByTerm(input, "LINK")).toEqual(output); // new test
    });   
});



// describe("Filter function", () => {
//     test("it should filter by the search term 'uRl' regardless of case", () => {
//         const input = [
//             { id: 1, url: "https://wwww.url1.dev" },
//             { id: 2, url: "https://www.url2.dev" },
//             { id: 3, url: "https://www.link3.dev" }
//         ];

//         const output = [
//             { id: 3, url: "https://www.link3.dev" }
//         ];

//         expect(filterByTerm(input, "uRl")).toEqual(output);
//     });

//     test("it should return the entire input array for an empty search term", () => {
//         const input = [
//             { id: 1, url: "https://wwww.url1.dev" },
//             { id: 2, url: "https://www.url2.dev" },
//             { id: 3, url: "https://www.link3.dev" },
//         ];

//         expect(filterByTerm(input, "")).toEqual(input);
//     });
// });

// function filterByTerm(inputArr, searchTerm) {
//         const regex = new RegExp(searchTerm, "i"); 
//         return inputArr.filter(function(arrayElement) {
//             return arrayElement.url.match(regex); 
//         });
//     }