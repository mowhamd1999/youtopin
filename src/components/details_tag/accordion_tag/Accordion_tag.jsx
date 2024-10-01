import React from "react";
import style from "./accordion_tag.module.css";
///////////////////////////////////////////
import Accordion from "react-bootstrap/Accordion";
///////////////////////////////////////////
const Accordion_tag = ({ details }) => {
  return (
    <div className={style.container}>
      <Accordion>
        {details.daily_itinerary.map((item, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header className={style.header}>
              <span className={style.headerText}>روز {item.day}</span>
            </Accordion.Header>
            <Accordion.Body className={style.content}>
              {item.activities.map((activity, activityIndex) => (
                <div key={activityIndex}>{activity}</div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Accordion_tag;
