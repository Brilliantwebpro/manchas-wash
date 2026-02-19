import Seo from "../components/Seo.jsx";
import { brand } from "../data/siteData.js";
import teamImg from "../assets/Detailing images/car-wash-detailing-industry.jpg";
import luxeImg from "../assets/Detailing images/360_F_397247724_XCpf2rqFdYkQ5NTW0ZkSA4dlQLY2eOv2.jpg";

const About = () => {
  return (
    <>
      <Seo
        title="About"
        description="Learn more about Manchas Wash and our local car wash and detailing service in Lamesa, TX."
        path="/about"
      />
      <section className="section">
        <div className="container grid grid-2">
          <div>
            <div className="section-title">Built on consistency and clean results</div>
            <p className="section-lead">
              Manchas Wash is a local business focused on reliable service,
              honest pricing, and quality work. We help drivers keep vehicles
              clean with practical packages for both routine upkeep and deep
              detailing.
            </p>
            <ul className="list" style={{ marginTop: 20 }}>
              <li>Clear communication and fast scheduling</li>
              <li>Detail options for both cars and trucks</li>
              <li>Service quality backed by a final walkthrough</li>
            </ul>
            <div className="grid grid-2" style={{ marginTop: 24 }}>
              <div className="image-card">
                <img src={teamImg} alt="Manchas Wash service team" />
              </div>
              <div className="image-card">
                <img src={luxeImg} alt="Vehicle detailing result" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="badge">At A Glance</div>
            <div style={{ marginTop: 16 }}>
              <p>
                <strong>Address:</strong> {brand.address}
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Hours:</strong> {brand.hours}
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Primary Focus:</strong> Car wash and auto detailing.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Service Area:</strong> {brand.serviceArea.join(", ")}
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <p className="notice">
                Prices may vary depending on vehicle size and condition. Contact
                us for exact pricing before your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
