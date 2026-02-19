import Seo from "../components/Seo.jsx";
import { brand } from "../data/siteData.js";
import contactImg from "../assets/Detailing images/beautiful-car-interior-clean-up-service.jpg";

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Manchas Wash to request pricing, confirm service availability, or schedule your vehicle."
        path="/contact"
      />
      <section className="section">
        <div className="container grid grid-2">
          <div>
            <div className="section-title">Contact Manchas Wash</div>
            <p className="section-lead">
              Send your vehicle details and preferred time. We will respond with
              pricing and the next available appointment.
            </p>
            <div className="card" style={{ marginTop: 24 }}>
              <p>
                <strong>Phone:</strong> {brand.phone}
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Email:</strong> {brand.email}
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Address:</strong> {brand.address}
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Hours:</strong> {brand.hours}
              </p>
            </div>
            <div className="image-card" style={{ marginTop: 24 }}>
              <img src={contactImg} alt="Interior detailing service" />
            </div>
          </div>
          <form className="card form contact-form">
            <div className="form-grid">
              <div>
                <label>Name</label>
                <input className="input" placeholder="Your name" required />
              </div>
              <div>
                <label>Email</label>
                <input
                  className="input"
                  type="email"
                  placeholder="you@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label>Vehicle</label>
              <input className="input" placeholder="Year, make, model" />
            </div>
            <div>
              <label>Message</label>
              <textarea
                className="textarea"
                placeholder="Tell us your service type and vehicle condition."
                required
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Send Request
            </button>
            <p className="notice">
              We usually respond the same day.
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
