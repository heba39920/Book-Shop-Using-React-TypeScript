import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export default function MainButton({ text }: { text: string }) {
  return (
    <Button
    sx={{
      backgroundColor: "transparent",
      color: "#393280",
      border: "1px solid #393280",
      padding: "10px 30px",
      marginTop: "20px",
    }}
  
  >
   {text}
    <EastIcon sx={{ marginInlineStart: "5px" }} />
  </Button>
  )
}
