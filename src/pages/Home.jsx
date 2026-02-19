import Seo from "../components/Seo.jsx";
import {
  brand,
  stats,
  services,
  testimonials,
  gallery,
  blogPosts,
  membership,
  processSteps,
} from "../data/siteData.js";
import { Link } from "react-router-dom";
import heroImg from "../assets/Detailing images/car-detailing-concept-man-face-mask-with-orbital-polisher-repair-shop-polishing-roof-orange-suv-car.jpg";
import interiorImg from "../assets/Detailing images/beautiful-car-interior-clean-up-service.jpg";
import washImg from "../assets/Detailing images/car-wash-detailing-station (2).jpg";
import polishImg from "../assets/Detailing images/hands-professional-car-service-worker-with-orbital-polisher-polishing-yellow-luxury-car-hood_769609-816.avif";
import teamImg from "../assets/Detailing images/car-wash-detailing-industry.jpg";
import luxeImg from "../assets/Detailing images/360_F_397247724_XCpf2rqFdYkQ5NTW0ZkSA4dlQLY2eOv2.jpg";

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    name: brand.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address,
      addressLocality: "Lamesa",
      addressRegion: "TX",
      postalCode: "79331",
    },
    telephone: brand.phone,
    areaServed: brand.serviceArea,
    url: brand.website,
  };

  return (
    <>
      <Seo
        title="Car Wash & Detailing"
        description="Manchas Wash provides affordable interior and exterior detailing in Lamesa, TX and nearby areas."
        schema={schema}
      />
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="pill">Local | Affordable | Reliable</span>
            <h1>Manchas Wash keeps your ride clean inside and out.</h1>
            <p>
              From quick washes to complete details, we help drivers in Lamesa
              keep their vehicles looking fresh with straightforward pricing and
              consistent results.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 24, flexWrap: "wrap" }}>
              <Link className="btn btn-primary" to="/booking">
                Book a Wash
              </Link>
              <Link className="btn btn-ghost" to="/services">
                View Pricing
              </Link>
            </div>
            <ul className="list" style={{ marginTop: 24 }}>
              <li>Service options for cars, trucks, and SUVs</li>
              <li>Serving Lamesa and nearby communities</li>
              <li>Fast response and easy scheduling</li>
            </ul>
          </div>
          <div className="hero-card">
            <img className="image-round" src={heroImg} alt="Manchas Wash detailing service" />
            <div style={{ marginTop: 18 }}>
              <div className="badge">Service Snapshot</div>
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
              <div style={{ marginTop: 18 }}>
                <p className="notice">
                  Prices may vary depending on vehicle size and condition. Send
                  your vehicle type for an exact quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">Our Service Menu</div>
          <p className="section-lead">
            Straightforward packages designed to fit everyday needs and full
            cleanups.
          </p>
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
            <div className="badge">Interior Care</div>
            <h3 style={{ marginTop: 16 }}>
              Keep your cabin clean, fresh, and comfortable
            </h3>
            <p className="section-lead" style={{ marginTop: 12 }}>
              We vacuum, wipe down, and refresh interior surfaces so your daily
              drive feels cleaner and better maintained.
            </p>
            <img className="image-round" src={interiorImg} alt="Interior detailing" />
          </div>
          <div className="card">
            <div className="badge">Exterior Care</div>
            <h3 style={{ marginTop: 16 }}>Wash, shine, and finish</h3>
            <p className="section-lead" style={{ marginTop: 12 }}>
              Exterior services remove buildup and restore shine with careful
              hand wash methods and finishing touches.
            </p>
            <img className="image-round" src={polishImg} alt="Exterior detailing" />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid grid-2">
          <div className="card card-light">
            <div className="badge">How It Works</div>
            <h3 style={{ marginTop: 16 }}>Simple booking and fast turnaround</h3>
            <div className="process-list">
              {processSteps.map((step) => (
                <div key={step.title} className="process-step">
                  <strong>{step.title}</strong>
                  <span>{step.detail}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="badge">Why Local Drivers Choose Us</div>
            <h3 style={{ marginTop: 16 }}>Clear pricing and dependable work</h3>
            <p className="section-lead" style={{ marginTop: 12 }}>
              We focus on quality basics done right: showing up on time,
              communicating clearly, and delivering clean vehicles every time.
            </p>
            <img className="image-round" src={washImg} alt="Vehicle being washed by Manchas Wash" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">Recent Washes</div>
          <p className="section-lead">
            Real transformations from our car wash and detailing appointments.
          </p>
          <div className="gallery" style={{ marginTop: 24 }}>
            {gallery.map((item, index) => (
              <div className="gallery-item" key={item} title={item}>
                <span>{item}</span>
                <img
                  src={
                    [washImg, luxeImg, heroImg, interiorImg, polishImg, teamImg][
                      index % 6
                    ]
                  }
                  alt={item}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-title">Customer Feedback</div>
          <p className="section-lead">
            Drivers around Lamesa trust Manchas Wash for practical, quality
            detailing.
          </p>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {testimonials.map((testimonial) => (
              <div className="card" key={testimonial.name}>
                <div className="badge">5-Star Service</div>
                <p style={{ marginTop: 16, color: "var(--neutral-200)" }}>
                  "{testimonial.quote}"
                </p>
                <strong style={{ marginTop: 16, display: "block" }}>
                  {testimonial.name}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container cta-band">
          <div>
            <h3>Need your vehicle cleaned this week?</h3>
            <p className="section-lead">
              Book online in minutes or call us directly for fast scheduling.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" to="/booking">
              Book Appointment
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid grid-2">
          <div className="card">
            <div className="badge">Maintenance Plans</div>
            <h3 style={{ marginTop: 16 }}>Stay clean year-round</h3>
            <p className="section-lead" style={{ marginTop: 12 }}>
              Monthly options are available for drivers who want consistent
              upkeep and faster booking priority.
            </p>
            <div className="grid" style={{ marginTop: 18 }}>
              {membership.map((item) => (
                <div key={item.name} className="card card-light">
                  <strong>{item.name}</strong>
                  <p style={{ marginTop: 8, color: "var(--neutral-200)" }}>
                    {item.detail}
                  </p>
                  <div style={{ marginTop: 12 }}>
                    Starting at <strong>${item.price}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card card-light">
            <div className="badge">Our Team</div>
            <h3 style={{ marginTop: 16 }}>Locally focused, service driven</h3>
            <p className="section-lead" style={{ marginTop: 12 }}>
              We are a local operation committed to quality washes, fair
              pricing, and customer-first service for every appointment.
            </p>
            <img className="image-round" src={teamImg} alt="Manchas Wash team" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">Car Care Tips</div>
          <p className="section-lead">
            Practical guidance to help your vehicle stay cleaner between visits.
          </p>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {blogPosts.map((post) => (
              <div className="card" key={post.title}>
                <span className="badge">{post.date}</span>
                <h3 style={{ marginTop: 14 }}>{post.title}</h3>
                <p style={{ marginTop: 12, color: "var(--neutral-200)" }}>
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

