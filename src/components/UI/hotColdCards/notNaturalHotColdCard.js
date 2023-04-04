import { useEffect, useState } from "react";
import RatingStars from "../ratingStars";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


const NotNaturalHotColdCard = ({data}) => {
    const [typeOfService, setTypeOfService] = useState('');
    const [color, setColor] = useState('');
    const [shadowColor, setShadowColor] = useState('');
    const [serviceIcons, setServiceIcons] = useState([]);
    
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

        let serviceArr = []
        {data.services.map((s) => {
            const icon = categories[s]
            serviceArr.push(icon)
          })}
        setServiceIcons(serviceArr)   

    } , [data.services])

    const categories = {
        'Cryo': '❄️',
        'Ice Bath': '🛀🏿',
        'Cold Plunge': '🛀🏿',
        'Hot Tub': '⛲',
        'Sauna': '🥵',
        'Steam Room': '💨',
        'ProSpa': '🧖‍♂️',
        'Other': '👻'
    };

    const today = new Date().toLocaleString('en-us', { weekday: 'long' });
    const todayHours = data.hours.find(h => h.day === today)?.hours;

    return (
        <div>
            <div className={`relative ${color} h-48 w-80 rounded-t-md`}>
                <div className="relative p-4">
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col">
                            <div className="font-black text-lg">{data.name}</div>
                            <div className="text-sm">{data.city} - {data.state}</div>
                            <div><RatingStars rating={data.rating}/></div>
                            <div className="text-sm">{data.visits} visitors</div>
                        </div>
                        <div className="flex flex-col text-right">
                            <div className="text-sm font-bold">Starting Price</div>
                            <div className="text-3xl font-thin">${data.startingPrice}</div>
                            {
                                data.promotion &&
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-right">Promotion</div>
                                        <div className="-mt-1 text-md font-thin text-right">{data.promotionDescription}</div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 flex text-right p-2 place-content-end">
                    Today: {today} {todayHours} <div className="p-1"><BsFillArrowRightCircleFill /></div>
                </div>  
            </div>
            <div className={`w-80 bg-opacity-50 bg-white grid grid-cols-2 rounded-b-md p-2 bottom-0 shadow-2xl  ${shadowColor}`}>
                <div>{serviceIcons}</div>
                <div className="text-right">🤍</div>                
            </div>
        </div>
    )
}

export default NotNaturalHotColdCard;