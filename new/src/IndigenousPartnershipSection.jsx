import React from 'react';
import './IndigenousPartnershipSection.css';

// Placeholder for numbered circle icons
const NumberedCircleIcon = ({ number }) => (
  <span className="numbered-circle-icon">{number}</span>
);

const IndigenousPartnershipSection = () => {
  return (
    <section className="indigenous-partnership-section">
      <div className="section-content-wrapper">

        {/* Main Title and Subtitle */}
        <p className="section-small-heading">INDIGENOUS PARTNERSHIPS</p>
        <h2 className="section-main-heading">Honouring Land, Spirit, and Shared Resilience</h2>
        <p className="section-subtitle-text">
          As a Canada-based initiative, Made in Africa Expo Canada 2026 recognizes that our gathering
          takes place on the traditional lands of Indigenous Peoples.
        </p>

        {/* Two-Column Content Grid */}
        <div className="content-grid">
          {/* Our Intentional Design Column */}
          <div className="intentional-design-column">
            <h3 className="column-title">Our Intentional Design</h3>
            <p className="column-description">
              Guided by Indigenous advisors, Elders, and Knowledge Keepers from across
              Treaty 6, the 2026 Expo in Edmonton is designed to:
            </p>
            <ul>
              <li>
                <NumberedCircleIcon number="1" />
                <div>
                  <h4>Honour the Land</h4>
                  <p>Deeply respect the Peoples who host us.</p>
                </div>
              </li>
              <li>
                <NumberedCircleIcon number="2" />
                <div>
                  <h4>Drive Economic Growth</h4>
                  <p>Create tangible opportunities for Indigenous and African businesses.</p>
                </div>
              </li>
              <li>
                <NumberedCircleIcon number="3" />
                <div>
                  <h4>Bridge Histories</h4>
                  <p>Build understanding between communities with shared experiences of resilience.</p>
                </div>
              </li>
              <li>
                <NumberedCircleIcon number="4" />
                <div>
                  <h4>Inspire Generations</h4>
                  <p>Foster long-term collaboration across continents.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Core Programming & Protocols Column */}
          <div className="programming-protocols-column">
            <h3 className="column-title">Core Programming & Protocols</h3>
            <ul>
              <li>
                <h4>Ceremonial Opening</h4>
                <p>Led by a respected Elder or Knowledge Keeper, the Expo begins with a Land
                  Acknowledgement and traditional ceremony.
                </p>
              </li>
              <li>
                <h4>Trade & Innovation</h4>
                <p>Dedicated spaces highlighting Indigenous-led enterprises in energy, technology,
                  agriculture, and creative industries.
                </p>
              </li>
              <li>
                <h4>B2B Matchmaking</h4>
                <p>Specialized networking sessions designed to spark joint ventures between Indigenous
                  and African business leaders.
                </p>
              </li>
              <li>
                <h4>Shared History Dialogues</h4>
                <p>Sessions exploring common threads of land stewardship, community governance, and
                  overcoming systemic barriers.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Quote Section */}
        <div className="quote-section">
          <p className="quote-text">
            "Indigenous Peoples in Canada and African communities both carry histories marked by colonialism and land dispossession. At
            the same time, both hold deep knowledge of intergenerational resilience and stewardship. We gather to weave these futures
            together."
          </p>
        </div>

        {/* Join Us in Partnership Section */}
        <div className="join-partnership-section">
          <h3 className="join-partnership-title">Join Us in Partnership</h3>
          <p className="join-partnership-description">
            We invite Indigenous Nations, organizations, and businesses across Edmonton, Alberta, and
            Canada to help shape this global stage. We are actively seeking participation from:
          </p>
          <div className="partnership-buttons">
            <button className="partnership-btn">Economic Development Corporations looking for global trade bridges</button>
            <button className="partnership-btn">Indigenous-Owned Businesses and cooperatives</button>
            <button className="partnership-btn">Chambers of Commerce and tourism groups</button>
            <button className="partnership-btn">Cultural Practitioners and Knowledge Keepers</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndigenousPartnershipSection;