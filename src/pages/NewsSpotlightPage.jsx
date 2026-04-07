import React, { useEffect, useState } from "react";
import HappeningCard from "../components/HappeningCard";
import "./HappeningsPages.css";

function NewsSpotlightPage() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    setNewsItems([
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        alt: "Retail excellence recognition",
        title: "Vikaasa Mall Wins Retail Excellence Recognition",
        category: "News & Spotlight",
        date: "05 April 2026",
        description:
          "Vikaasa Mall has been recognized for customer experience, innovative design, and retail excellence."
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        alt: "New lifestyle brands",
        title: "Spotlight on New Lifestyle Brands",
        category: "News & Spotlight",
        date: "10 April 2026",
        description:
          "Several new lifestyle and fashion brands have joined the mall to enhance the shopping experience."
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
        alt: "Community stories",
        title: "Community Stories from Visitors",
        category: "News & Spotlight",
        date: "14 April 2026",
        description:
          "Visitors shared memorable shopping, dining, and entertainment experiences at Vikaasa Mall."
      }
    ]);
  }, []);

  return (
    <section className="happenings-page">
      <div className="happenings-page-hero">
        <h1>News & Spotlight</h1>
        <p>Stay updated with the latest highlights and stories from Vikaasa Mall.</p>
      </div>

      <div className="happenings-page-grid">
        {newsItems.map((item) => (
          <HappeningCard
            key={item.id}
            image={item.image}
            alt={item.alt}
            title={item.title}
            category={item.category}
            date={item.date}
            description={item.description}
            buttonText="Read More"
            onAction={() => alert(item.title)}
          />
        ))}
      </div>
    </section>
  );
}

export default NewsSpotlightPage;