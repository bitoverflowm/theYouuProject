import { useEffect, useState } from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const RatingStars = ({rating}) => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const numrating = Number(rating);

        let starOut = []

        for (let i = 1; i < numrating; i++) {
            starOut.push(<IoIosStar key={i} />);
        }

        if( numrating % 1 === 0.5){
            starOut.push(<IoIosStarHalf key={numrating} />)
        }
        setStars(starOut)
    }, [rating])

    return (<div className="flex">{stars}</div>)
}

export default RatingStars;