'use client'

import ReactDOMServer from 'react-dom/server';
import parse, { domToReact } from 'html-react-parser';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import {HiChip} from 'react-icons/hi';
import {FaTwitter, FaCat} from 'react-icons/fa';

const HtmlConverter = ({ title, htmlString }) => {
    
    const [siteUrl, setSiteUrl] = useState('');
    const [twitterUrl, setTwitterUrl] = useState('');
    const [productHuntUrl, setProductHuntUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [textContent, setTextContent] = useState('');

    const options = {
        replace: ({ attribs, name, children }) => {
            if (!attribs) {
                return;
            }

            if (name === 'a' && attribs && attribs.class && attribs.class.includes('kg-btn')) {
                let buttonLabel;
                if (children[0].data === 'View Site') {
                    setSiteUrl(attribs.href);
                    buttonLabel = 'Site';
                } else if (children[0].data === 'Twitter') {
                    setTwitterUrl(attribs.href);
                    buttonLabel = 'Twitter';
                } else if (children[0].data === 'Product Hunt') {
                    setProductHuntUrl(attribs.href);
                    buttonLabel = 'ProductHunt';
                }

                if (buttonLabel) {
                    return (
                        <a className="kg-btn" href={attribs.href}>
                        {domToReact(children, options)}
                        </a>
                    );
                }
            }

            // Extract Image URL
            if (name === 'img') {
                setImageUrl(attribs.src);
                return;
            }

            // Style for h2, h3 and p elements
            // Style for h2, h3 and p elements
            if (['h1', 'h2', 'h3', 'p'].includes(name)) {
                const childrenHtml = ReactDOMServer.renderToStaticMarkup(domToReact(children, options));
                switch (name) {
                case 'h1':
                    setTextContent((prevText) => prevText + `<div class="text-3xl py-2">${childrenHtml}</div>`);
                    break;
                case 'h2':
                    setTextContent((prevText) => prevText + `<div class="text-2xl py-2 font-black">${childrenHtml}</div>`);
                    break;
                case 'h3':
                    setTextContent((prevText) => prevText + `<div class="text-3xl py-2 font-bold">${childrenHtml}</div>`);
                    break;
                case 'p':
                    setTextContent((prevText) => prevText + `<div class="text-base py-2 pb-2">${childrenHtml}</div>`);
                    break;
                }
            }
        }
    }

    useEffect(() => {
        if(!textContent){
            console.log(htmlString)
            parse(htmlString, options);
        }
    }, [htmlString]);

    return (
            <div className='p-10'>
                {!(textContent) && <div className='animate-pulse text-center'>loading...</div>}
                <div className='col-span-1 flex flex-col place-items-center'>
                    {imageUrl && <Image src={imageUrl} alt={title} width={150} height={150} className=''/>}
                    {siteUrl && <Link href={siteUrl} className='p-2 text-lg flex gap-1 place-items-center text-misterr-pink font-black hover:text-slate-400'> <HiChip /> View Project</Link>}
                    {twitterUrl && <Link href={twitterUrl} className='p-2 text-lg flex gap-2 place-items-center text-white font-black hover:text-misterr-pink'><FaTwitter /> Project Twitter </Link>}
                    {productHuntUrl && <Link href={productHuntUrl} className='p-2 text-lg flex gap-2 place-items-center text-white font-black hover:text-misterr-pink'><FaCat /> Product Hunt</Link> }
                </div>
                <div className='col-span-2' dangerouslySetInnerHTML={{ __html: textContent }} />
            </div>
        )
}

export default HtmlConverter;