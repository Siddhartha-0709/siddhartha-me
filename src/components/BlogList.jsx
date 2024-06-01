/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const getBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://lobster-app-lh22k.ondigitalocean.app/api/v1/blogs/getBlogs');
      console.log(response.data.blogs);
      setBlogs(response.data.blogs);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col min-h-screen bg-gray-950 text-white">
          <header className="py-12 px-4 md:px-6">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold mb-8">My Blog - Thoughts, Stories, and Insights</h1>
              <h1 className="text-xl mb-8">
                Hello and welcome to my blog!
                <br />
                <br /> Here, you'll find a curated selection of my latest posts, where I share my thoughts, stories, and
                insights on a variety of topics. Rooted in my perspective and personal experiences, each post offers a
                glimpse into how I view the world and the ideas that shape my thoughts. It's important to note that
                while I express my personal views, I do so with the utmost respect and understanding, with no intention
                to cause harm or offense to any community.
              </h1>
              <h1 className="text-xl mb-8">
                As you journey through my blog, I hope you find inspiration, entertainment, and perhaps even a new
                perspective on the world. Each post is crafted with care and authenticity, reflecting my genuine passion
                for sharing ideas and connecting with readers like you. So, make yourself comfortable, grab a cup of
                your favorite beverage, and let's embark on this reading adventure together. . .
              </h1>
              <hr />
            </div>
          </header>
          <main className="flex-grow">
            <div className="container mx-auto py-8 px-4 md:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <button
                    key={blog._id}
                    className="bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-2 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:scale-105 hover:cursor-pointer"
                    onClick={() => {
                      navigate('/blog-view', { state: blog });
                    }}
                  >
                    <img
                      src={blog.thumbnailUrl}
                      alt="Blog Post 1"
                      className="w-full h-48 object-fit-cover mb-4"
                      loading="lazy"
                    />
                    <div className="p-4 text-left">
                      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                      <p className="text-gray-400 mb-4">{blog.shortDescription.substring(0, 300) + '...'}</p>
                      <p className="text-primary-500 font-medium hover:underline hover:text-violet-500" href="#">
                        Read More
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default BlogList;
