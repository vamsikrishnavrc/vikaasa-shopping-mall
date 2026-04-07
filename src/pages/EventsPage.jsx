import React, { useEffect, useState } from "react";
import HappeningCard from "../components/HappeningCard";
import "./HappeningsPages.css";

function EventsPage() {
  const [events, setEvents] = useState([]);

  const heading = "Mall Events"; // simple variable (no state needed)

 useEffect(() => {
  setEvents([
    {
      id: 1,
      image: "https://files.prokerala.com/news/photos/imgs/1024/models-walk-the-ramp-showcasing-fashion-designer-644338.jpg",
      alt: "Summer Fashion Showcase",
      title: "Summer Fashion Showcase",
      category: "Event",
      date: "12 April 2026",
      description: "Experience the latest fashion collections with live shows and styling sessions."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      alt: "Weekend Music Night",
      title: "Weekend Music Night",
      category: "Event",
      date: "18 April 2026",
      description: "Enjoy live performances and vibrant weekend vibes at the mall."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      alt: "Kids Fun Carnival",
      title: "Kids Fun Carnival",
      category: "Event",
      date: "25 April 2026",
      description: "Games, workshops, and fun activities for kids and families."
    }
  ]);
}, []);

  return (
    <section className="happenings-page">
      <div className="happenings-page-hero">
        <h1>{heading}</h1>
        <p>
          Discover exciting events happening at Vikaasa Mall and enjoy memorable experiences.
        </p>
      </div>

      <div className="happenings-page-grid">
        {events.map((event) => (
          <HappeningCard
            key={event.id}
            image={event.image}
            alt={event.alt}
            title={event.title}
            category={event.category}
            date={event.date}
            description={event.description}
            buttonText="View Event"
            onAction={() => alert(event.title)}
          />
        ))}
      </div>
    </section>
  );
}

export default EventsPage;