import React, {useState} from "react";
import style from "./accordion_tag.module.css";
///////////////////////////////////////////
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
///////////////////////////////////////////
const Accordion_tag = ({ details }) => {
  const [expandedIndices, setExpandedIndices] = useState([]);

  const handleExpansion = (index) => {
    setExpandedIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        // اگر این آیتم باز است، آن را از لیست بازها حذف کن
        return prevIndices.filter((i) => i !== index);
      } else {
        // اگر این آیتم بسته است، آن را به لیست بازها اضافه کن
        return [...prevIndices, index];
      }
    });
  };

  return (
    <div className={style.container}>
    <h3 className={style.title} >برنامه سفر:</h3>
      {details.daily_itinerary.map((item, index) => (
        <Accordion
          key={index}
          expanded={expandedIndices.includes(index)}
          onChange={() => handleExpansion(index)}
          TransitionComponent={Fade}
          className={style.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className={style.accordionSummary}
          >
            <Typography>{`روز ${item.day}`}</Typography>
          </AccordionSummary>
          <AccordionDetails className={`${style.accordionDetails} ${expandedIndices.includes(index) ? style.open : style.closed}`}>
            {item.activities.map((activity, activityIndex) => (
              <Typography key={activityIndex}>
                {activity}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Accordion_tag;
