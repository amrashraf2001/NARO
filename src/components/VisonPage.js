import React from "react";
import "./VisionPage.css";

const VisionPage = () => {
  return (
    <div className="afro-details">
      <header className="afro-header">
        <br />
        <div className="afro-countdown">
          <p>
            <strong>Vision</strong>
          </p>
        </div>
        <div className="header-content">
          <p>
            <strong>
              To unite North African members under a cohesive and influential
              regional office, advocating for democracy, equality, and
              sustainable development. NARO aims to empower North African local
              governments to actively contribute to the political and economic
              advancement of the region, ensuring their voices are heard and
              their impact is felt across the continent.
            </strong>
          </p>
        </div>
        <div className="header-image">
          <img
            src="https://images.theconversation.com/files/610678/original/file-20240731-19-rel8jr.jpg?ixlib=rb-4.1.0&rect=0%2C247%2C2116%2C1057&q=45&auto=format&w=668&h=324&fit=crop"
            alt="Africities Summit"
          />
        </div>
      </header>
    </div>
  );
};

export default VisionPage;
