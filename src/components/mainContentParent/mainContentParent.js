'use server'
import GhostAPI from '../../app/api/ghost/ghost-api'
import { AiOutlineArrowRight } from 'react-icons/ai'

import Link from 'next/link';
import Image from 'next/image';
//import { useRouter } from 'next/router';

import FeaturedVideo from '@/components/UI/featuredVideo'

async function getPosts(){
    try {
      const postsData = await GhostAPI.posts.browse({include: 'tags', filter: 'tag:theYouuProject'});
      return postsData;
    } catch (err) {
      console.error(err);
      throw err; // This will stop execution and show the error in Next.js
    }
  }

  const MainContentParent = async ({params}) => {
    //const router = useRouter()
    const postData = getPosts();
    const [posts] = await Promise.all([postData]);
    console.log(posts)
    
    return (
        <div className='min-h-screen flex flex-col'>
            {/*
                <div className='w-1/6 bg-black text-white'>
                    <div className='flex top-0 place-content-center p-10'>
                        <Link href={'/'} className="cursor-pointer">
                            <Image src={'/mrPink.png'} width={75} height={75} alt='pinkLogo' className='rounded-full'/>
                        </Link>
                    </div>
                    <Content bookmark={value}/>
                </div>*/
            }
            
            <div className='relative w-1/2 mx-auto my-20 overflow-hidden rounded-md '>
                    <div className='absolute z-0'>
                        <FeaturedVideo/>
                    </div>
                    { posts.length > 0  && posts.map((post) => (
                        post.featured && (
                            <Link href={`/blog/${post.slug}/`}>
                                <div className='relative pb-2 z-10 w-88 border-2 border-black bg-white rounded-lg my-12 mx-8 cursor-pointer hover:bg-youu-red hover:text-white'>
                                    <div className='divide-y divide-dashed'>
                                        <div className='text-black w-56 pl-8 pt-8 font-black pb-4'> {post.title} </div>
                                        <div className='text-xs px-8 py-4'>{post.excerpt}</div>
                                    </div>
                                    <div className='flex pl-8 pr-4 py-2 pt-16 place-items-center'>
                                        <div className='p-4 rounded-full bg-youu-blueberry'></div>
                                        <div className='flex flex-col mx-2 text-xxs'><div>Source:</div><div>Huberman Lab</div></div>
                                        <div className='flex ml-auto mr-2 place-items-center gap-2'>
                                            {post.tags.map((tag, index) => (
                                                tag.name.startsWith("0_o:") && (
                                                    <div key={index} className='bg-youu-red px-2 py-2 rounded-md font-black text-white text-xs'>{tag.name.replace("0_o:", "")}</div>
                                                )
                                            ))} <AiOutlineArrowRight className='text-youu-red' />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )))}
            </div>
            <div className='flex-grow min-h-screen'>
                <div className="overflow-auto grid gap-2 px-36 py-28 bg-white rounded-tl-lg">
                    { posts.length > 0
                        ? posts.map((post) => (
                            <Link href={`/blog/${post.slug}/`}>
                                <div key={post.id} className="flex rounded-lg place-items-center gap-2 px-4 hover:bg-misterr-pink hover:bg-opacity-5 hover:text-bito-background-end cursor-pointer">
                                    <div className='w-1/12 text-slate-400 font-medium text-right pr-2'>{new Date(post.published_at).toLocaleDateString('en-US', {month: 'long', day: 'numeric'})}</div>
                                    <div className="font-bold text-xl py-2 w-6/12 transition-color-shadow duration-slow hover:text-misterr-pink">{post.title}</div>
                                    <div className='text-right flex'>
                                        {post.tags && post.tags.map((tag) => (
                                            <span key={tag.id} className='px-2 py-1 bg-misterr-pink rounded-lg mx-1'>{tag.name}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))
                        :
                            <div className='flex flex-col text-black px-72'>
                                <div>Page is currently under contscuction</div>
                                <div className='pb-3'>Please check back in later</div>
                                <Link href="/" className='font-black hover:text-misterr-pink'>Click here to return home</Link>
                                <Link href="/" className='underline text-misterr-pink font-black hover:text-black'>Follow me on Twitter for latest updates</Link>
                                <Link href="/" className='text-misterr-pink hover:text-black'>Or join the Discord Community to chat, share ideas and learn together!</Link>
                            </div>                    
                    }
                </div>
            </div>
        </div>
    )
}

export default MainContentParent;