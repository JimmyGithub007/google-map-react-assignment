import { Card, CircularProgress, Drawer, Fab, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

const colors = {
    gBlue : "#4285F4",
    gRed: "#EA4335",
    gYellow: "#FBBC05",
    gGreen: "#34A853",
    gGray: "#767676",
    sGray: "#e8eaed82"
};

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

export const MuiDrawer = styled(Drawer)({
    '.MuiDrawer-paper': {
        width: "100vw",
        '@media (min-width: 576px)': {
            width: "500px"
        }
    }
});

export const MuiFloatButton = styled(Fab)({
    position: 'absolute',
    bottom: 16,
    right: 16,
    '.MuiBadge-badge': {
        top: "-6px",
        left: "-5px",
        height: "25px",
        width: "25px",
        borderRadius: "100%",
    }
});

export const MuiProgress = styled(CircularProgress)({
    height: "40px",
    position: "absolute",
    right: "10px",
    top: "10px",
    width: "40px",
});

export const MuiShadowTypography = styled("div")({
    display: "flex",
    justifyContent: "center",
    position: "relative",
    textAlign: "center",
    width: "100%",
    '.MuiTypography-root:nth-of-type(2)': {
        alignItems: "center",
        color: colors.sGray,
        display: "flex",
        fontSize: "25px",
        fontWeight: "900",
        position: "absolute",
        top: "8px",
        zIndex: "-1",
        'svg': {
            fontSize: "inherit",
        },
        '@media (min-width: 480px)': {
            fontSize: "40px"
        },
        '@media (min-width: 768px)': {
            fontSize: "45px"
        }
    }
});

export const MuiSpan = styled("span")({
    display: "flex",
    alignItems: "center",
    gap: "5px",
});

export const MuiTypography = styled(Typography)({
    fontSize: "25px",
    '@media (min-width: 480px)': {
        fontSize: "30px"
    },
    '@media (min-width: 768px)': {
        fontSize: "35px"
    },
    'b:nth-of-type(1), b:nth-of-type(4), b:nth-of-type(8), b:nth-of-type(11)': {
        color: colors.gBlue
    },
    'b:nth-of-type(2), b:nth-of-type(6), b:nth-of-type(9), b:nth-of-type(13)': {
        color: colors.gRed
    },
    'b:nth-of-type(3), b:nth-of-type(10)': {
        color: colors.gYellow
    },
    'b:nth-of-type(5), b:nth-of-type(12)': {
        color: colors.gGreen
    },
    'b:nth-of-type(7), b:nth-of-type(14)': {
        color: colors.gGray
    }
});