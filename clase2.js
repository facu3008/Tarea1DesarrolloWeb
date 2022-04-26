class User {
  constructor(name, surname, books, pets) {
    this.name = name;
    this.surname = surname;
    this.books = books;
    this.pets = pets;
  }

  getFullName() {
    console.log(`El nombre ingresado es ${this.name} ${this.surname}`);
  }

  addPets(pet) {
    this.pets.push(pet);
    return this.pets;
  }

  countPets() {
    console.log(this.addPets.length);
  }

  addBook(bookName, bookAuthor) {
    this.books.push({ title: bookName, author: bookAuthor });
    return this.books;
    console.log(this.books);
  }

  getBooksName() {
    return this.books.map((book) => book.title);
  }
}

const book = [{ title: "", author: "" }];
const pet = [];
// mascotas.push = new mascotas();
const usuario1 = new User(
  "Facundo",
  "Moya",
  [
    { title: "El señor de los anillos", author: "Tolkien" },
    { title: "Libro sin titulo", author: "Cualquiera" },
    { title: "El tunel", author: "Sabato" },
  ],
  ["perro", "gato", "pajarito"]
);
// console.log(usuario1.book.length);

usuario1.getFullName();
usuario1.getBooksName();
usuario1.countPets();

/*
const usuario2 = new Usuario(
  "Pepe",
  "Gonzalez",
  [
    { titulo: "El señor de los anillos", autor: "Tolkien" },
    { titulo: "El señor de los cieolos", autor: "zapallo" },
  ],
  ["lombriz", "cebolla", "zapallo"]
);

console.log(usuario2.libros.titulo);
// countMascotas();

// console.log(usuario1.addMascotas());
// usuario1.countMascotas();

// const usuario2 = new Usuario("Pavblo", "Gomez", {"El señor de los anillos"}["perro", "gato"])
// usuario1.getFullName();
// usuario1.getBooks();
*/
