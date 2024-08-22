import { Box, IconButton } from "@mui/material";
import { RollToRef } from "../utils/defaultFunctions";
import { DefaultIcons } from "../utils/defaultIcons";

interface Props {
    text: string
    color?: string
}


export function MoveToNextSection(props: Props) {
  return (
    <>
      <Box
        sx={{
          display: "block",
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {/* <Button>Saiba mais sobre mim</Button> */}
        <IconButton
          onClick={() => {
            RollToRef(props.text);
          }}
          sx={{
            color: "white",
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 100%": {
                transform: "translateY(0)",
              },
              "50%": {
                transform: "translateY(-10px)",
              },
            },
          }}
        >
          <DefaultIcons.NextSectionIcon size={36} color="red" />
        </IconButton>
      </Box>
    </>
  );
}
