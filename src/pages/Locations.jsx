import Seo from "../components/Seo.jsx";
import { brand } from "../data/siteData.js";
import travelImg from "../assets/Detailing images/car-wash-detailing-industry.jpg";

const Locations = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Manchas Wash Service Areas",
    containedInPlace: brand.serviceArea,
  };

  return (
    <>
      <Seo
        title="Service Areas"
        description="Manchas Wash serves Lamesa, TX and nearby areas with car wash and detailing services."
        path="/locations"
        schema={schema}
      />
      <section className="section">
        <div className="container">
          <div className="section-title">Where We Service</div>
          <p className="section-lead">
            We provide service in Lamesa and surrounding areas. If your location
            is nearby, we can likely schedule you.
          </p>
          <div className="hero-banner" style={{ marginTop: 24 }}>
            <div>
              <span className="badge">Service Radius</span>
              <h3 style={{ marginTop: 12 }}>
                Local coverage with flexible scheduling
              </h3>
              <p className="section-lead" style={{ marginTop: 12 }}>
                Send your city and vehicle type and we will confirm availability
                quickly.
              </p>
            </div>
            <img src={travelImg} alt="Manchas Wash coverage" />
          </div>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {brand.serviceArea.map((area) => (
              <div className="card" key={area}>
                <h3>{area}</h3>
                <p style={{ marginTop: 12, color: "var(--neutral-200)" }}>
                  Appointment availability depends on route and time slot.
                </p>
              </div>
            ))}
          </div>
          <div className="cta-band" style={{ marginTop: 36 }}>
            <div>
              <h3>Not sure if we cover your area?</h3>
              <p className="section-lead">
                Contact us with your zip code and we will confirm.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="/contact">
                Check Coverage
              </a>
              <a className="btn btn-ghost" href="/booking">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
