import React from "react"
import { Paper, Typography } from "@mui/material"
import Rating, { RatingProps } from "@mui/material/Rating"
import StarIcon from "@mui/icons-material/Star"

type RatingCardProps = RatingProps & {
  label: string
}

const RatingCard = (props: RatingCardProps) => (
  <Paper elevation={3} sx={{ padding: "2rem", maxWidth: "20rem" }}>
    <Typography>{props.label}</Typography>
    <Rating
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
  </Paper>
)

export default RatingCard
