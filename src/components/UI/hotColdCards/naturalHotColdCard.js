import { useEffect, useState } from "react";
import RatingStars from "../ratingStars";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Image from "next/image";

const NaturalHotColdCard = ({data}) => {
    const [typeOfService, setTypeOfService] = useState('');
    const [serviceIcons, setServiceIcons] = useState([]);

    useEffect(() => {        
        if (data.services.includes('Cold Plunge') && data.services.includes('Hot Spring')) {
            setTypeOfService('both');
            setServiceIcons(['⛩️','🧊','🌺'])
        } else if (data.services.includes('Cold Plunge')) {
            setTypeOfService('cold');
            setServiceIcons(['🧊','🌺'])
        } else if (data.services.includes('Hot Spring')) {
            setTypeOfService('hot');
            setServiceIcons(['⛩️','🌺'])
        }
    } , [data.services])

    const today = new Date().toLocaleString('en-us', { weekday: 'long' });
    const todayHours = data.hours.find(h => h.day === today)?.hours;

    return (
        <div>
            <div className={`relative bg-hotAndColdNature h-36 w-80 rounded-t-md`}>
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
            <div className="w-80">
                <Image src={data.image} alt={data.name} width={350} height={350}/> 
            </div>
            <div className={`w-80 bg-opacity-50 bg-white grid grid-cols-2 rounded-b-md p-2 bottom-0 shadow-2xl  shadow-hotAndColdNature`}>
                <div>{serviceIcons}</div>
                <div className="text-right">🤍</div>                
            </div>
        </div>
    )
}

export default NaturalHotColdCard;