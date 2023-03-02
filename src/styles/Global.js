import { Card, CircularProgress, TextField } from "@mui/material";
import styled from "@emotion/styled";

export const MuiAutoCompleteField = styled(TextField)({
    width: "100%",
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: "15px",
    },
    '@media (min-width: 768px)': {
        width: "500px"
    }
});

export const MuiCard = styled(Card)({
    borderRadius: "15px",
    marginBottom: "10px",
});

export const MuiDiv = styled("div")({
    padding: "0 20px"
});

export const MuiProgress = styled(CircularProgress)({
    height: "40px",
    position: "absolute",
    right: "10px",
    top: "10px",
    width: "40px",
});

export const MuiSpan = styled("span")({
    display: "flex",
    alignItems: "center",
    gap: "5px",
});