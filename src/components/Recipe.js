// Authors: Spencer McKee, Daniel Obichie, and Yolanda Cao
// Recipe card component for use in recipe grid
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function MediaCard(props) {
    return (
        <Card style={{maxWidth: 345, rounded: false, borderRadius: 20}}>
            <CardActionArea>
                <CardMedia
                    style={{height: 180, width: "auto"}}
                    image={props.data.image}
                    title={props.data.image}
                />
                <CardContent>
                    <Typography style={{fontFamily: 'Abel', fontWeight: 'bold'}} gutterBottom variant="h5" component="h2">
                        {props.data.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
