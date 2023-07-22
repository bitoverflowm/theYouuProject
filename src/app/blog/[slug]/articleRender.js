
import React from 'react';
import Image from 'next/image';

import HtmlConverter from './htmlConverter';


//create a function based component
const ArticleRender = ({title, html, post}) => {
    //const [posts, setPosts] = useState([]);

    return (
        <div className=''>
            <div className="text-4xl w-full text-center font-black p-4">
                {title}
            </div>
            <div className='text-center font-light'>
                {post && <div>Reading Time: {post.reading_time} mins</div>}
            </div>
            <div className='p-6'>
                {post && post.feature_image && <Image src={post.feature_image} alt={title} width={800} height={650} className='rounded-md'/>}
            </div>
            <div className='flex flex-wrap gap-2 place-content-center'>
                {post && post.tags.map((tag) => (
                    <div className='p-2 text-white font-bold bg-misterr-pink text-black rounded-md'>{tag.name}</div>
                ))}
            </div>
            <div>
                <HtmlConverter title={title} htmlString={html}/>
            </div>
        </div>
    )
}

export default ArticleRender;
