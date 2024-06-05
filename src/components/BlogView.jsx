/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import hljs from 'highlight.js'; // Ensure you have highlight.js installed
import Loader from './Loader';

function BlogView() {
    const location = useLocation();
    const blog = location.state;
    const [blogFile, setBlog] = useState('');
    const [loading, setLoading] = useState(true);
    const fetchDocument = async (markdownUrl) => {
        try {
            const document = await axios.get(markdownUrl);
            setBlog(document.data);
            setLoading(false);
        } catch (error) {
            // console.error('THis part',error);
        }
    };

    const getBlogFile = async () => {
        console.log(blog._id);
        try {
            const url = `https://lobster-app-lh22k.ondigitalocean.app/api/v1/blogs/getBlogById/?id=${blog._id}`;
            // console.log('The url is ' + url);
            const response = await axios.get(url);
            // console.log('The Response - ', response.data.blogData);
            const markdownUrl = response.data.blogData.markdownUrl;
            await fetchDocument(markdownUrl);
        } catch (error) {
            // console.error(error);    
        }
    };

    useEffect(() => {
        getBlogFile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (blogFile) {
            hljs.highlightAll();
        }
    }, [blogFile]);

    if (!blog) {
        return <p className="text-white">No blog data available</p>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-950 text-white">
            {loading ? (<Loader />) : (
                <main className="flex-grow py-12 px-4 md:px-6">
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-bold mb-8">{blog.title}</h1>
                        {/* <h1 className="text-white text-xl mb-4">
                        {blog.shortDescription}
                    </h1> */}
                        <div className="mb-8">
                            <img
                                src={blog.thumbnailUrl}
                                alt={blog.title}
                                className="w-full h-auto rounded-lg ml-auto mr-auto"
                            />
                        </div>
                        <div className="bg-gray-950 rounded-lg overflow-auto">
                            <div dangerouslySetInnerHTML={{ __html: blogFile }} />
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
}

export default BlogView;