import React, { useMemo, useState } from "react";
import StoresHero from "../components/StoresHero";
import StoreCard from "../components/StoreCard";
import storesData from "../data/StoresData";
import "../components/StoresPage.css";


// const storeData = [
//   { name: "HAY", categories: ["Fashion"], image: "/images/hay.jpg" },
//   { name: "TONI&GUY", categories: ["Beauty & Wellness"], image: "/images/toni&guy.png" },
//   { name: "Desi Tacos", categories: ["Food & Beverages"], image: "/images/desitacos.jpg" },
//   { name: "Easybuy", categories: ["Fashion"], image: "/images/easybuy.png" },
//   { name: "Mufti", categories: ["Fashion"], image: "/images/mufti.jpeg" },
//   { name: "Heartfulness", categories: ["Speciality"], image: "/images/heartfulness.png" },
//   { name: "Soch", categories: ["Fashion"], image: "/images/soch.jpeg" },
//   { name: "Blackberrys", categories: ["Fashion"], image: "/images/blaclberrys.jpg" },
//   { name: "Bama", categories: ["Food & Beverages"], image: "/images/bma.jpg" },
//   { name: "Squuez Juice & Bars", categories: ["Food & Beverages"], image: "/images/squeez.jpeg" },
//   { name: "Vikaasa Play Zone", categories: ["Gamezone"], image: "https://dummyimage.com/600x360/121212/ffffff&text=Vikaasa+Playzone" },
//   { name: "McDonald's", categories: ["Food & Beverages"], image: "/images/mcdonalds.png" },
//   { name: "Wrogn", categories: ["Fashion"], image: "/images/Wrogn.jpg" },
//   { name: "Cream Stone", categories: ["Food & Beverages"], image: "/images/creamstone.jpg" },
//   { name: "Shanghai Times", categories: ["Food & Beverages"], image: "/images/shangchaitimes.png" },
//   { name: "The Potato Man", categories: ["Food & Beverages"], image: "/images/thepotatoman.jpeg" },
//   { name: "Chai Bliss", categories: ["Food & Beverages"], image: "/images/chaibliss.jpg" },
//   { name: "Viusmay", categories: ["Beauty & Wellness"], image: "/images/vismay.jpg" },
//   { name: "Smart Bazaar", categories: ["Hypermart"], image: "/images/smartbazaar.png" },
//   { name: "MFC", categories: ["Food & Beverages"], image: "/images/mfc.jpeg" },
//   { name: "Subway", categories: ["Food & Beverages"], image: "/images/subway.png" },
//   { name: "Go Colors", categories: ["Fashion"], image: "/images/gocolors.png" },
//   { name: "Pizza Hut", categories: ["Food & Beverages"], image: "/images/pizzahut.png" },
//   { name: "Indian Terrain", categories: ["Fashion"], image: "/images/indianterrain.png" },
//   { name: "Trends", categories: ["Fashion"], image: "/images/trends.jpeg" },
//   { name: "Sayar Relax Massage Chair", categories: ["Speciality"], image: "/images/sayara.png" },
//   { name: "Madina Watch", categories: ["Accessories", "Timepieces"], image: "/images/madinawatch.jpeg" },
//   { name: "Cethas Coffee", categories: ["Food & Beverages"], image: "/images/cethas.png" },
//   { name: "Maybell", categories: ["Beauty & Wellness"], image: "/images/maybell.jpeg" },
//   { name: "Popular Shoe Mart", categories: ["Foot Wear"], image: "/images/popularshoemart.png" },
//   { name: "Delhi Chaat", categories: ["Food & Beverages"], image: "/images/delhichaat.png" },
//   { name: "KFC", categories: ["Food & Beverages"], image: "/images/kfc.png" },
//   { name: "Bata", categories: ["Foot Wear"], image: "/images/bata.jpg" },
//   { name: "Thai Foot Spa", categories: ["Beauty & Wellness"], image: "/images/ThaiFootSpa.jpeg" },
//   { name: "BellaVita", categories: ["Beauty & Wellness"], image: "/images/bellavita.jpg" },
//   { name: "Max", categories: ["Fashion"], image: "/images/max.png" },
//   { name: "Avantra", categories: ["Fashion"], image: "/images/avantra.jpeg" },
//   { name: "Havmor Ice Cream", categories: ["Food & Beverages"], image: "/images/havmor.png" },
//   { name: "Trends Foot Wear", categories: ["Foot Wear"], image: "/images/trendsfootwear.png" },
//   { name: "Vikaasa Cinemas", categories: ["Leisure & Entertainment"], image: "https://dummyimage.com/600x360/121212/ffffff&text=Vikaasa+Cinemas" },
//   { name: "Coca-Cola", categories: ["Food & Beverages"], image: "/images/cocacola.jpeg" },
//   { name: "casio", categories: ["Accessories", "Timepieces"], image: "/images/casio.svg" }
// ];

const categories = [
  "All",
  "Accessories",
  "Beauty & Wellness",
  "Fashion",
  "Food & Beverages",
  "Foot Wear",
  "Timepieces",
  "Leisure & Entertainment",
  "Speciality",
  "Hypermart",
  "Gamezone",
];

function StoreCategoryTabs({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="store-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? "store-tab active-store-tab" : "store-tab"}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

// function StoreCard({ name, image, categories }) {
//   return (
//     <div className="store-card">
//       <div className="store-card-image">
//         <img src={image} alt={name} />
//       </div>
//       <div className="store-card-content">
//         <span className="store-card-badge">{categories.join(" • ")}</span>
//         <h3>{name}</h3>
//       </div>
//     </div>
//   );
// }

function StoresPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStores = useMemo(() => {
  let updatedStores = storesData;

  if (activeCategory !== "All") {
    updatedStores = updatedStores.filter((store) =>
      store.categories.includes(activeCategory)
    );
  }

  if (searchTerm.trim() !== "") {
    updatedStores = updatedStores.filter((store) =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return updatedStores;
}, [activeCategory, searchTerm]);

  const totalStoresText = useMemo(() => {
    return `${filteredStores.length} stores available`;
  }, [filteredStores]);

  return (
    <div className="stores-page">
      <StoresHero />

      <section className="stores-content-section">
        <div className="stores-topbar">
          <div className="stores-heading-block">
            <h2>Explore Our Store Collection</h2>
            <p>{totalStoresText}</p>
          </div>

          <div className="stores-search-box">
            <input
              type="text"
              placeholder="Search store name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <StoreCategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="stores-grid">
          {filteredStores.map((store) => (
            <StoreCard
              key={store.name}
              id={store.id}
              name={store.name}
              image={store.image}
              categories={store.categories}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default StoresPage;