import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center" }}>My Online Store</h1>
      </header>
      <main>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "200px", height: "200px" }}
              />

              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p
          style={{
            textAlign: "center",
            backgroundColor: "black",
            width: "100%",
            color: "white",
          }}
        >
          &copy; My Online Store 2023 OWNER SACHIN
        </p>
      </footer>
    </div>
  );
};

export default App;

// import React, { useState } from "react";

// function App() {
//   const [query, setQuery] = useState("");
//   const [books, setBooks] = useState([]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter a search term"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
//             .then((response) => response.json())
//             .then((data) => setBooks(data.items))
//             .catch((error) => console.log(error));
//         }}
//       >
//         Fetch
//       </button>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>{book.volumeInfo.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
