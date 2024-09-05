"use client";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function StarRating() {
  const [value, setValue] = useState(2);

  return (
    <div dir="rtl" className="">
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography dir="rtl" component="legend">
          امتیاز
        </Typography>
        <Rating
          dir="rtl"
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}
