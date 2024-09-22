import React from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Grid,
    Grow,
} from "@mui/material";

const CardItem = (props) => {
    const { cardDetails, onClick } = props;
    const { name, position, description, className,title,caption } = cardDetails;

    return (
        <Grid item xs={12} sm={12} md={12}>
            <Grow in timeout={1000}>
                <Card className={`${className} card-item`} onClick={onClick}>
                    <CardActionArea>
                        <CardContent>
                            {/* Name and Position */}
                            <Typography variant="h6" className="card-name" gutterBottom>
                                {title}
                            </Typography>
                            <Typography variant="subtitle2" className="card-position">
                                {position}
                            </Typography>

                            {/* Date and Recommendation Note */}
                            <Typography variant="caption" display="block" gutterBottom>
                                {caption}
                            </Typography>

                            {/* Description */}
                            <Typography variant="body2" className="card-description">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grow>
        </Grid>
    );
};

export default CardItem;
