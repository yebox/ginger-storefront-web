import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => {
  return (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ width: "14px" }} />}
      {...props}
    />
  );
})(({ theme }) => ({
  padding: "10px",
  borderRadius: "2px",
  background: "#FFFBF6",
  "& .MuiAccordionSummary-root:not(.Mui-expanded)": {
    border: `2px solid green`,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionDetails-root": {
    padding: `0px 32px 12px`,
    borderTop: `none`,
  },
  "& .MuiTypography-root": {
    color: `#626262`,
    fontFamily: `Barlow`,
    fontSize: `14px`,
    fontStyle: `normal`,
    fontWeight: `500`,
    lineHeight: `120%`,
  },
  "& .MuiAccordionSummary-content": {
    margin: `0px`,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const GAccordion = ({ title, content, idx }) => {
  const [expandedPanel, setExpandedPanel] = React.useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpandedPanel(newExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expandedPanel === `panel${idx}`}
      onChange={handleChange(`panel${idx}`)}
    >
      <AccordionSummary
        expanded={expandedPanel === `panel${idx}`}
        aria-controls={`panel${idx}d-content`}
        id={`panel${idx}d-header`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
