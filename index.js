const Table = document.getElementById("table")
const Titleadd = document.getElementById("title")
const Yearadd = document.getElementById("year")
const Genreadd = document.getElementById("genre")
const Ratingadd = document.getElementById("rating")
const AddButton = document.getElementById("addButton").addEventListener("click", addRow)
let rowcount = 1

const filmek = [
  {
    "title": "Ratatouille",
    "year": 2007,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Kung Fu Panda",
    "year": 2008,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Up",
    "year": 2009,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Toy Story 3",
    "year": 2010,
    "genre": "Animation",
    "rating": 1
  },
  {
    "title": "Frozen",
    "year": 2013,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Inside Out",
    "year": 2015,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Zootopia",
    "year": 2016,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Coco",
    "year": 2017,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "genre": "Animation",
    "rating": 3
  },
  {
    "title": "Joker",
    "year": 2019,
    "genre": "Drama",
    "rating": 4
  },
  {
    "title": "Parasite",
    "year": 2019,
    "genre": "Thriller",
    "rating": 4
  },
  {
    "title": "Encanto",
    "year": 2021,
    "genre": "Animation",
    "rating": 2
  },
  {
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "genre": "Action",
    "rating": 3
  },
  {
    "title": "The Super Mario Bros. Movie",
    "year": 2023,
    "genre": "Animation",
    "rating": 2
  },
  {
    "title": "Inside Out 2",
    "year": 2024,
    "genre": "Animation",
    "rating": 5
  }
];


function addRow()
{
  if (Titleadd.value == '' || Yearadd.value == '' || Genreadd.value == '' || Ratingadd.value == '') {
    alert("Please fill in all fields.");
    return;
  }
  let row = Table.insertRow(rowcount)
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell3 = row.insertCell(2);
  cell4 = row.insertCell(3);


    let ratingstars = ''

    for (let j = 0; j < Ratingadd.value; j++) {
        ratingstars += '⭐'
        
    }
  cell4.innerHTML = ratingstars
  cell3.innerHTML = Genreadd.value
  cell2.innerHTML = Yearadd.value
  cell1.innerHTML = Titleadd.value
  if (Ratingadd.value <= 2) {
        row.classList.add("low-rating")
    }
  Genreadd.value = ''
  Yearadd.value = ''
  Titleadd.value = ''
  Ratingadd.value = ''
  rowcount++
}

for (let i = 0; i < filmek.length; i++) {

    let row = Table.insertRow(i+1)
    rowcount++
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    let ratingstars = ''

    for (let j = 0; j < filmek[i].rating; j++) {
        ratingstars += '⭐'
        
    }
    cell4.innerHTML = ratingstars
    cell3.innerHTML = filmek[i].genre
    cell2.innerHTML = filmek[i].year
    cell1.innerHTML = filmek[i].title
    if (filmek[i].rating <= 2) {
        row.classList.add("low-rating")
    }
}