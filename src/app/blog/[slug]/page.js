// import { useRouter } from 'next/router';

import GhostAPI from "../../api/ghost/ghost-api";
import ArticleRender from "./articleRender";

import Link from "next/link";

async function getBlogPost(slug){
    try {
        const blogPost = await GhostAPI.posts.read({ slug: slug }, {formats: ['html']});
        return blogPost;
    } catch (err) {
      console.error(err);
      throw err; // This will stop execution and show the error in Next.js
    }
  }

const BlogPost = async ({ params }) => {
    //const router = useRouter();

    const blogPost = getBlogPost(params.slug);
    const [post] = await Promise.all([blogPost]);

    return (
        <div className="w-full">
            <div className="relative flex flex-row font-bold py-2 px-4 sm:px-24 bg-youu-red">
                <div className='ml-2 sm:ml-0 flex justify-start items-center w-1/2 cursor-pointer text-white'>
                    <Link href='/blog'>TheYouuProject</Link>
                </div>             
                <div className='relative flex flex-wrap ml-auto sm:ml-auto text-white my-auto sm:w-auto place-items-center'>
                    <div className='text-xs text-center cursor-pointer px-6 p-1'> About </div>
                    <div className='flex gap-3'>
                        <div className='cursor-pointer text-black text-xs p-2 px-4 bg-white rounded-md hover:bg-black hover:text-white font-black'>
                        <Link href="/signup">Join</Link>
                        </div>
                        <div className='cursor-pointer text-xs p-2 hover:underline hover:text-black font-black'>
                        <Link href="/signup">Sign-In/Up</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex relative">
                <div className="p-6 w-5/6 sm:p-16 bg-white rounded-md m-4 sm:m-10 min-h-screen">
                    <div className="max-w-3xl mx-auto">
                        <ArticleRender
                            title={post.title}
                            html={post.html}
                            post={post}
                        />
                    </div>                
                </div>            
            </div>
        </div>
    );
}

  
export default BlogPost;