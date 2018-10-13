import React from 'react'
import { Card, CardMedia, CardActionArea, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const CardContainer = (props) => (
    <Card style={styles.cardStyle}>
        <CardActionArea>
            <CardMedia 
                image={props.image}
            />
        </CardActionArea>
        <CardActions style={styles.contentStyle}>
            <CardContent>
                    <Typography variant="headline" componen="h3" color="inherit">{props.header}</Typography>
                    <Typography component="p" color="inherit">{props.text}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" style={styles.buttonStyle}>View Sheet</Button>
            </CardActions>
        </CardActions>
    </Card>
);

const styles = {
    cardStyle: {
        width: "285px",
        textAlign: "center",
        color: 'white',
        backgroundColor: "rgba(72, 86, 101, 1)"
    },
    contentStyle: {
        display: "flex",
        justifyContent: 'center',
        flexDirection: "column",
        padding: '15px'
    },
    buttonStyle: {
        color: "rgb(0, 184, 230)",
        borderColor: 'rgb(0, 184, 230)',
    }
}

export default CardContainer;