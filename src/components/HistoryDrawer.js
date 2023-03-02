import { useState } from "react";
import { useSelector } from 'react-redux';
import { MuiDrawer, MuiFloatButton, MuiShadowTypography, MuiTypography } from "../styles/Global";
import { Badge, Grow, IconButton, Typography } from "@mui/material";
import { Close, HistoryOutlined, HistoryRounded } from "@mui/icons-material";

import History from "./History";

const HistoryDrawer = () => {
    const { history } = useSelector(state => state.places);
    const [ open, setOpen ] = useState(false);

    return (<>
        <Grow in={true}>
            <MuiFloatButton size="medium" color="primary" aria-label="history" onClick={() => setOpen(true)}>
                <Badge
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    badgeContent={history.length}
                    color="warning"
                    max={99}
                >
                    <HistoryRounded />
                </Badge>
            </MuiFloatButton>
        </Grow>
        <MuiDrawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
        >
            <IconButton color="primary" sx={{ height: "40px", width: "40px" }} onClick={() => setOpen(false)}>
                <Close />
            </IconButton>
            <MuiShadowTypography>
                <MuiTypography>
                    <b>H</b><b>i</b><b>s</b><b>t</b><b>o</b><b>r</b><b>y</b>
                </MuiTypography>
                <Typography>
                    <HistoryOutlined /> Your Search History
                </Typography>
            </MuiShadowTypography>
            <History />
        </MuiDrawer>
    </>)
}

export default HistoryDrawer;