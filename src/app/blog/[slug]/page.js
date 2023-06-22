// import { useRouter } from 'next/router';

import GhostAPI from "../../api/ghost/ghost-api";

async function getBlogPost(slug){
    try {
        const blogPost = await GhostAPI.posts.read({ slug: slug });
        console.log(blogPost);
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
        <div>
            { /*<Top />   */}
            <div className="p-1 sm:p-10 min-h-screen bg-gradient-to-br from-bito-background-start to-bito-background-end">
            
            <div className="p-6 sm:p-16 bg-white rounded-md m-4 sm:m-10 min-h-screen">
                <div className="max-w-3xl mx-auto">
                    <div className="font-black text-4xl">{post.title}</div>
                    <div className="pt-8 text-xl font-subheading blog-content text-justify" dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>                
            </div>            
        </div>
        </div>
    );
}

  
export default BlogPost;