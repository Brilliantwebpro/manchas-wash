import { useMemo, useState, useEffect } from "react";
import Seo from "../components/Seo.jsx";
import { services, addOns, vehicleSizes, brand } from "../data/siteData.js";
import bookingImg from "../assets/Detailing images/car-wash-detailing-station (2).jpg";

const timeSlots = ["8:00 AM", "10:30 AM", "1:00 PM", "3:30 PM", "5:30 PM"];

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: timeSlots[0],
    service: services[0].name,
    vehicleSize: vehicleSizes[0].label,
    location: "",
    notes: "",
    addOns: [],
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("manchasBooking");
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("manchasBooking", JSON.stringify(form));
  }, [form]);

  const pricing = useMemo(() => {
    const service = services.find((item) => item.name === form.service);
    const vehicle = vehicleSizes.find((item) => item.label === form.vehicleSize);
    const addOnTotal = addOns
      .filter((addon) => form.addOns.includes(addon.name))
      .reduce((total, addon) => total + addon.price, 0);
    const base = (service?.price ?? 0) * (vehicle?.multiplier ?? 1);
    const subtotal = base + addOnTotal;
    const deposit = Math.round(subtotal * 0.2);
    const total = subtotal + Math.round(subtotal * 0.08);

    return {
      base: Math.round(base),
      addOnTotal,
      subtotal: Math.round(subtotal),
      deposit,
      total,
    };
  }, [form]);

  const toggleAddOn = (name) => {
    setForm((prev) => {
      const exists = prev.addOns.includes(name);
      return {
        ...prev,
        addOns: exists
          ? prev.addOns.filter((addon) => addon !== name)
          : [...prev.addOns, name],
      };
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Book Service"
        description="Book Manchas Wash services online and receive a same-day confirmation when available."
        path="/booking"
      />
      <section className="section">
        <div className="container">
          <div className="section-title">Book Your Appointment</div>
          <p className="section-lead">
            Pick your service, date, and vehicle type. We will confirm your
            appointment as quickly as possible.
          </p>
          <div className="hero-banner" style={{ marginTop: 24 }}>
            <div>
              <span className="badge">Fast Booking</span>
              <h3 style={{ marginTop: 12 }}>
                Clean vehicle scheduling in just a few minutes.
              </h3>
              <p className="section-lead" style={{ marginTop: 12 }}>
                Share your service type and condition notes so we can give you
                the most accurate quote.
              </p>
            </div>
            <img src={bookingImg} alt="Booking a car wash appointment" />
          </div>
          <div className="grid grid-2" style={{ marginTop: 30 }}>
            <form className="card form" onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  className="input"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  className="input"
                  name="phone"
                  placeholder="(###) ###-####"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Preferred Date</label>
                <input
                  className="input"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Time Slot</label>
                <select className="select" name="time" value={form.time} onChange={handleChange}>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Package</label>
                <select className="select" name="service" value={form.service} onChange={handleChange}>
                  {services.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Vehicle Size</label>
                <select
                  className="select"
                  name="vehicleSize"
                  value={form.vehicleSize}
                  onChange={handleChange}
                >
                  {vehicleSizes.map((size) => (
                    <option key={size.label} value={size.label}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Service Location</label>
                <input
                  className="input"
                  name="location"
                  placeholder="Address or neighborhood"
                  value={form.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Add-Ons</label>
                <div className="grid grid-2" style={{ marginTop: 10 }}>
                  {addOns.map((addon) => (
                    <label key={addon.name} className="tag checkbox-tag">
                      <input
                        type="checkbox"
                        checked={form.addOns.includes(addon.name)}
                        onChange={() => toggleAddOn(addon.name)}
                      />
                      {addon.name} (+${addon.price})
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label>Notes</label>
                <textarea
                  className="textarea"
                  name="notes"
                  placeholder="Tell us about stains, pet hair, or heavy dirt buildup."
                  value={form.notes}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Reserve Appointment
              </button>
              {submitted && (
                <p className="notice">
                  Thanks {form.name || "there"}. We will follow up soon at {form.email || "your email"}.
                </p>
              )}
            </form>
            <div className="booking-panel">
              <div>
                <div className="badge">Estimate</div>
                <h3 style={{ marginTop: 12 }}>Estimated total</h3>
              </div>
              <div className="pricing-row">
                <span>Package base</span>
                <strong>${pricing.base}</strong>
              </div>
              <div className="pricing-row">
                <span>Add-ons</span>
                <strong>${pricing.addOnTotal}</strong>
              </div>
              <div className="pricing-row">
                <span>Subtotal</span>
                <strong>${pricing.subtotal}</strong>
              </div>
              <div className="pricing-row">
                <span>Estimated taxes & fees</span>
                <strong>${Math.round(pricing.subtotal * 0.08)}</strong>
              </div>
              <div className="pricing-row">
                <span>Total estimate</span>
                <strong>${pricing.total}</strong>
              </div>
              <div className="pricing-row">
                <span>Deposit (20%)</span>
                <strong>${pricing.deposit}</strong>
              </div>
              <p className="notice">Need a quick quote? Call {brand.phone}.</p>
              <div className="card card-light">
                <h4>What happens next?</h4>
                <ul className="list" style={{ marginTop: 12 }}>
                  <li>We review your vehicle details.</li>
                  <li>We confirm your appointment window.</li>
                  <li>We complete service and final quality check.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
