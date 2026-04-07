import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaRegBookmark } from "react-icons/fa";
import storesData from "../data/StoresData";
import StoreDetailHero from "../components/StoreDetailHero";
import ShareMenu from "../components/ShareMenu";
import StoreInfoPanel from "../components/StoreInfoPanel";
// import StoreGallery from "../components/StoreGallery";
import "../components/StoreDetailPage.css";

function StoreDetailPage() {
  const { storeId } = useParams();

  const store = storesData.find((item) => item.id === storeId);

  if (!store) {
    return <Navigate to="/stores" replace />;
  }

  return (
    <div className="store-detail-page">
      <StoreDetailHero
        name={store.name}
        heroImage={store.heroImage}
        logoCard={store.logoCard}
        categories={store.categories}
      />

      <section className="store-detail-actions">
        <button className="detail-icon-btn">
          <FaPhoneAlt />
        </button>

        <button className="detail-icon-btn">
          <FaMapMarkerAlt />
        </button>

        <ShareMenu social={store.social} />

        <button className="detail-icon-btn">
          <FaRegBookmark />
        </button>
      </section>

      <StoreInfoPanel
        description={store.description}
        timingsWeekdays={store.timingsWeekdays}
        timingsWeekends={store.timingsWeekends}
        floor={store.floor}
      />

    {/* <StoreGallery photos={store.photos} /> */}
    </div>
  );
}

export default StoreDetailPage;