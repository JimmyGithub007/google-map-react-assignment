import { Card, CircularProgress, createTheme, Drawer, Fab, Grid, Switch, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

const colors = {
    gBlue : "#4285F4",
    gRed: "#EA4335",
    gYellow: "#FBBC05",
    gGreen: "#34A853",
    gGray: "#767676",
    bGray: "#ebf2fe47",
    sGray: "#e8eaed82",
    bDark: "#121212",
    sDark: "#fafafa45",
    tGray: "#f5f5f5"
};

export const MuiLightTheme = createTheme({
    background: colors.bGray,
    shadowFontColor: colors.sGray,
    searchColor: "inherit"
});

export const MuiDarkTheme = createTheme({
    background: colors.bDark,
    shadowFontColor: colors.sDark,
    searchColor: "white"
});

export const MuiBodyGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.background
}));
  
export const MuiAutoCompleteField = styled(TextField)(({ theme }) => ({
    width: "100%",
    '& .MuiSvgIcon-root, & .MuiInputBase-root': {
        color: theme.searchColor
    },
    '& .MuiOutlinedInput-notchedOutline': {
        background: colors.bGray,
        borderRadius: "15px",
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: theme.searchColor
        }
    },
    '@media (min-width: 768px)': {
        width: "500px"
    }
}));

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

export const MuiShadowTypography = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    position: "relative",
    textAlign: "center",
    width: "100%",
    '.MuiTypography-root:nth-of-type(1)': {
        zIndex: 1
    },
    '.MuiTypography-root:nth-of-type(2)': {
        alignItems: "center",
        color: theme.shadowFontColor,
        display: "flex",
        fontSize: "25px",
        fontWeight: "900",
        position: "absolute",
        top: "8px",
        zIndex: 0,
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
}));

export const MuiSpan = styled("span")({
    display: "flex",
    alignItems: "center",
    gap: "5px",
});

export const MuiSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: "#8796A5",
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: "#003892",
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: "#8796A5",
      borderRadius: 20 / 2,
    },
}));
  

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