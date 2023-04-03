import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";


const RatingStars = ({rating}) => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const numrating = Number(rating);

        let starOut = []

        for (let i = 1; i < numrating; i++) {
            starOut.push(<AiFillStar key={i} />);
        }

        if( numrating % 1 === 0.5){
            starOut.push(<BsStarHalf key={numrating} />)
        }
        setStars(starOut)
    }, [rating])

    return (<div className="flex">{stars}</div>)
}

export default RatingStars;