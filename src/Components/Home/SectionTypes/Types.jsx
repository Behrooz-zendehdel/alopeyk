import React from "react";
import { types } from "../../../data/data";

const Types = () => {
  return (
    <section>
      <div className="types">
        <h1>الوپیک، بدون محدودیت</h1>
        <div className="detail-types">
          <div className="types-card">
            {types.map((type) => (
              <div className="card-list" key={type.id}>
                <img src={type.img} alt={type.title} />
                <div className="card-title">
                  <h4>{type.title}</h4>
                  <p>{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Types;
