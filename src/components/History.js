import { Card, CardHeader, Collapse, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { AccessTimeFilled, Place, Restore } from '@mui/icons-material';
import { TransitionGroup } from 'react-transition-group';

import React from 'react';
import styled from '@emotion/styled';

const MuiCard = styled(Card)({
    borderRadius: "15px",
    padding: "5px 0",
    width: "100%",
    '@media (min-width: 768px)': {
        width: "500px"
    }
});

const MuiSpan = styled("span")({
    display: "flex",
    alignItems: "center",
    gap: "5px",
});

const History = () => {
    const { history } = useSelector(state => state.places);

    return (<MuiCard>
        <CardHeader
            avatar={<Restore />}
            title={<Typography variant="h5">History</Typography>}
        />
        <List>
            <TransitionGroup component={null}>
                {
                    history.map((item) => (<Collapse key={item.time}>
                        <ListItem>
                            <ListItemText
                                primary={item.address}
                                secondary={<React.Fragment>
                                    <MuiSpan><AccessTimeFilled /> {item.time}</MuiSpan>
                                    <MuiSpan><Place /> {item.location.lat + ' ' + item.location.lng}</MuiSpan>
                                </React.Fragment>}
                            />
                        </ListItem>
                        <Divider />
                    </Collapse>))
                }
            </TransitionGroup>
        </List>
        { history.length === 0 && <Typography variant="h6" sx={{ color: "gray", textAlign: "center" }}>Sorry, no record were found.</Typography> }
    </MuiCard>)
}

export default History;