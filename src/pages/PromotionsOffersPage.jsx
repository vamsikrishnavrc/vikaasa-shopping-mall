import React, { useEffect, useState } from "react";
import HappeningCard from "../components/HappeningCard";
import "./HappeningsPages.css";

function PromotionsOffersPage() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    setOffers([
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80",
        alt: "Fashion sale offer",
        title: "Flat 50% Off on Fashion Weekend",
        category: "Promotions & Offers",
        date: "Valid till 20 April 2026",
        description:
          "Top fashion outlets are offering exclusive discounts on selected collections for a limited period."
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
        alt: "Food court special offer",
        title: "Buy 1 Get 1 at Food Court Specials",
        category: "Promotions & Offers",
        date: "Valid till 22 April 2026",
        description:
          "Enjoy exciting combo deals and special meal offers across leading food brands inside the mall."
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1200&q=80",
        alt: "Shopping rewards",
        title: "Family Shopping Rewards",
        category: "Promotions & Offers",
        date: "Valid till 30 April 2026",
        description:
          "Shop above a minimum amount and unlock gift vouchers, family rewards, and exclusive benefits."
      }
    ]);
  }, []);

  return (
    <section className="happenings-page">
      <div className="happenings-page-hero">
        <h1>Promotions & Offers</h1>
        <p>Explore the latest shopping deals and reward programs at Vikaasa Mall.</p>
      </div>

      <div className="happenings-page-grid">
        {offers.map((offer) => (
          <HappeningCard
            key={offer.id}
            image={offer.image}
            alt={offer.alt}
            title={offer.title}
            category={offer.category}
            date={offer.date}
            description={offer.description}
            buttonText="Grab Offer"
            onAction={() => alert(offer.title)}
          />
        ))}
      </div>
    </section>
  );
}

export default PromotionsOffersPage;