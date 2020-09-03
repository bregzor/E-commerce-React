import React from "react";

export default function RatingStars({ rating }) {
  
	const renderStars = () => {
	  let star = "";
    if (rating > 0 && rating <= 1) {
		star = "x"
    } else if (rating > 1 && rating <= 2) {
		star = "xx"
    } else if (rating > 2 && rating <= 3) {
		star = "xxx"
    } else if (rating > 3 && rating <= 4) {
		star = "xxxx"
    } else if (rating > 4 && rating <= 5) {
		star = "xxxxx"
    } else {
		star = "nostar";
	}

	return star;
  };

  return <p>{renderStars}</p>;
}
