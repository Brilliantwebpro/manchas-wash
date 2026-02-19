import Seo from "../components/Seo.jsx";
import { services, addOns, vehicleSizes, faqs, brand } from "../data/siteData.js";
import washImg from "../assets/Detailing images/car-wash-detailing-station (2).jpg";
import interiorImg from "../assets/Detailing images/beautiful-car-interior-clean-up-service.jpg";
import polishImg from "../assets/Detailing images/hands-professional-car-service-worker-with-orbital-polisher-polishing-yellow-luxury-car-hood_769609-816.avif";

const Services = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Car wash and auto detailing",
    serviceType: "Auto detailing",
    provider: {
      "@type": "AutoDetailing",
      name: brand.name,
    },
  };

  return (
    <>
      <Seo
        title="Services & Pricing"
        description="Explore Manchas Wash service packages with clear pricing for full details, wash and vacuum, and interior/exterior-only options."
        path="/services"
        schema={schema}
      />
      <section className="section">
        <div className="container">
          <div className="section-title">Services & Pricing</div>
          <p className="section-lead">
            Choose the package that fits your vehicle and condition level.
            Prices shown are starting rates.
          </p>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {[washImg, interiorImg, polishImg].map((image, index) => (
              <div key={image} className="image-card">
                <img src={image} alt={`Service ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="grid grid-3" style={{ marginTop: 30 }}>
            {services.map((service) => (
              <div className="card" key={service.name}>
                <span className="badge">{service.time}</span>
                <h3 style={{ marginTop: 16 }}>{service.name}</h3>
                <p style={{ marginTop: 8, color: "var(--neutral-200)" }}>
                  {service.description}
                </p>
                <div style={{ marginTop: 18, fontSize: "1.2rem" }}>
                  Starting at <strong>${service.price}</strong>
                </div>
                <ul className="list" style={{ marginTop: 16 }}>
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid grid-2">
          <div className="card card-light">
            <div className="badge">Vehicle Size Notes</div>
            <p className="section-lead" style={{ marginTop: 12 }}>
              Truck and large SUV pricing may increase based on size and time
              required.
            </p>
            <ul className="list" style={{ marginTop: 16 }}>
              {vehicleSizes.map((size) => (
                <li key={size.label}>
                  {size.label} - {Math.round(size.multiplier * 100)}% of base rate
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <div className="badge">Add-Ons</div>
            <p className="section-lead" style={{ marginTop: 12 }}>
              Optional upgrades available during your appointment.
            </p>
            <ul className="list" style={{ marginTop: 16 }}>
              {addOns.map((addon) => (
                <li key={addon.name}>
                  {addon.name} - ${addon.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">Service FAQs</div>
          <p className="section-lead">
            Quick answers for booking, pricing, and what each package includes.
          </p>
          <div className="grid" style={{ marginTop: 24 }}>
            {faqs.map((faq) => (
              <details key={faq.question} className="card faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
