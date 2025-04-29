import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { ReactNode } from 'react';

interface SideBarProps {
  children: ReactNode;
  title: string;
}

export default function SideBarItems({ children, title }: SideBarProps) {
  return (
    <Accordion sx={{padding:'15px', boxShadow:0}}>
    <AccordionSummary
      expandIcon={<AddIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span" sx={{color:'#393280', fontSize:'16px', fontWeight:'700'}}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
    {children}
    </AccordionDetails>
  </Accordion>
  )
}
