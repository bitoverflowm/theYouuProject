import { useEffect, useState } from "react";
import RatingStars from "../ratingStars";


const NotNaturalHotColdCard = ({data}) => {
    const [typeOfService, setTypeOfService] = useState('');
    const [color, setColor] = useState('');
    const [shadowColor, setShadowColor] = useState('');
    
    useEffect(() => {
        let serviceIncludesCold = data.services.some(service => ['Cold Plunge', 'Cryo', 'Ice Bath'].includes(service));
        let serviceIncludesHot = data.services.some(service => ['Hot Tub', 'Sauna', 'Steam'].includes(service));
        
        if (serviceIncludesCold && serviceIncludesHot) {
            setTypeOfService('both');
            setColor('bg-hotAndColdboth')
            setShadowColor('shadow-hotAndColdboth')
        } else if (serviceIncludesCold) {
            setTypeOfService('cold');
            setColor('bg-hotAndColdcold')
            setShadowColor('shadow-hotAndColdcold')
        } else if (serviceIncludesHot) {
            setTypeOfService('hot');
            setColor('bg-hotAndColdhot')
            setShadowColor('shadow-hotAndColdhot')
        }
    } , [data.services])

    const today = new Date().toLocaleString('en-us', { weekday: 'long' });
    const todayHours = data.hours.find(h => h.day === today)?.hours;

    return (
        <div className={`relative ${color} h-44 w-72 rounded-md shadow-2xl ${shadowColor}`}>
            <div className="relative p-2">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col">
                        <div>{data.name}</div>
                        <div>{data.city} - {data.state}</div>
                        <div><RatingStars rating={data.rating}/></div>
                        <div>{data.visits} visitors</div>
                    </div>
                    <div className="flex flex-col text-right">
                        <div>Starting Price</div>
                        <div>${data.price}</div>
                        {
                            data.promotion &&
                                <div className="text-right">
                                    <div className="text-right">{data.promotion}</div>
                                    <div className="text-right">{data.promotionDescription}</div>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <div className="text-right">
                Today: {today} {todayHours}
            </div> 
            <div className="rounded-b-md absolute p-2 bottom-0 w-full bg-white">
                hello
            </div>
        </div>
    )
}

export default NotNaturalHotColdCard;