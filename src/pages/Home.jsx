import React from "react";
import WelcomeBanner from "../components/WelcomeBanner";
import ExperienceCard from "../components/ExperienceCard";
import HappeningCard from "../components/HappeningCard";
import BrandSlider from "../components/BrandSlider";

function Home() {
  const happenings = [
    {
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
      alt: "Vikaasa anniversary celebration",
      year: "2025",
      title: "Vikaasa 1st Anniversary Celebrations",
      description: "A joyful celebration filled with festive decor, guests, and memorable moments.",
    },
    {
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80",
      alt: "International chess day",
      year: "2025",
      title: "International Chess Day 2025",
      description: "An exciting event bringing strategy, talent, and competition to the mall.",
    },
    {
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
      alt: "Organ donation event",
      year: "2025",
      title: "Indian Organ Donation 2025",
      description: "A meaningful awareness drive uniting the community for a noble cause.",
    },
  ];

  const brands = [
    {
      name: "Coca-Cola",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/960px-Coca-Cola_logo.svg.png",
    },
    {
      name: "McDonald's",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/250px-McDonald%27s_logo.svg.png",
    },
    {
      name: "Pizza Hut",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Pizza_Hut_2025.svg",
    },
    {
      name: "Wrogn",
      image: "https://images.yourstory.com/cs/wordpress/2017/05/Wrogn-01.jpg",
    },
    {
      name: "Blackberrys",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnj2soIWc2s7I4mQBKyqgYvcxVq1-5UqTpQ&s",
    },
  ];

  return (
    <>
      <WelcomeBanner />

      <section className="experience-section">
        <div className="experience-header">
          <p className="experience-tag">Discover More</p>
          <h2>Everything You Love In One Place</h2>
        </div>

        <div className="experience-grid">
          <ExperienceCard
            title="Shopping"
            description="Explore premium brands, fashion stores, and lifestyle outlets."
            className="shopping-card"
          />
          <ExperienceCard
            title="Food"
            description="Enjoy delicious dining, snacks, desserts, and cafe experiences."
            className="food-card"
          />
          <ExperienceCard
            title="Entertainment"
            description="Experience movies, events, gaming, and fun for everyone."
            className="entertainment-card"
          />
        </div>
      </section>

      <section className="happenings-section">
        <div className="happenings-header">
          <p className="happenings-tag">Events & Celebrations</p>
          <h2>Happenings</h2>
          <div className="happenings-line"></div>
        </div>

        <div className="happenings-grid">
          {happenings.map((item) => (
            <HappeningCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <BrandSlider brands={brands} />
    </>
  );
}

export default Home;