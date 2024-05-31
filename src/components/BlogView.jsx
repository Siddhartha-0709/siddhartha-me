/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import '../components/markdown.css';
function BlogView() {
    const location = useLocation();
    const blog = location.state;

    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        if (blog && blog.markdownUrl) {
            axios.get(blog.markdownUrl)
                .then(response => {
                    setMarkdownContent(response.data);
                })
                .catch(error => {
                    console.error('Error fetching markdown file:', error);
                });
        }
    }, [blog]);

    if (!blog) {
        return <p className="text-white">No blog data available</p>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-950 text-white">
            <main className="flex-grow py-12 px-4 md:px-6">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-8">{blog.title}</h1>
                    <h1 className="text-white text-2xl mb-4">
                        {blog.shortDescription}
                    </h1>
                    <div className="mb-8">
                        <img
                            src={blog.thumbnailUrl}
                            alt={blog.title}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                   
                    <div className="bg-gray-950 rounded-lg p-4 overflow-auto">
                        <ReactMarkdown className="markdown-content">
                            {markdownContent}
                        </ReactMarkdown>
                    </div>

                </div>
            </main>

        </div>
    );
}

export default BlogView;
