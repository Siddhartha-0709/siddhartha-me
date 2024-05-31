/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Facebook } from 'react-content-loader'
import Loader from './Loader';


function UploadBlog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [markdown, setMarkdown] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("shortDescription", description);
        formData.append("thumbnailFile", thumbnail);
        formData.append("markdownFile", markdown);


        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        console.log('Data--', formDataObject);
        try {
            setLoading(true);
            const response = await axios.post('https://lobster-app-lh22k.ondigitalocean.app/api/v1/blogs/uploadBlog', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data); // handle response from server
            setLoading(false);
            alert("Blog uploaded successfully");
            //reset form
            setTitle("");
            setDescription("");
            setThumbnail(null);
            setMarkdown(null);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };


    return (

        <main className="py-12 px-4 md:px-6 bg-gray-950 text-white h-screen">
            {
                loading ? (<>
                    <Loader />
                </>) : (<>
                    <div className="container mx-auto">
                        <h1 className="text-4xl font-bold mb-8">Add New Blog Post</h1>
                        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg p-8 shadow-lg">
                            <div className="mb-6">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-400">
                                    Title
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="mt-1 p-2 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-50"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-400">
                                    Short Description
                                </label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                    required
                                    className="mt-1 p-2 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-50"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-400">
                                    Thumbnail
                                </label>
                                <input
                                    id="thumbnail"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setThumbnail(e.target.files[0])}
                                    required
                                    className="mt-1 block w-full text-sm text-gray-50
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-md file:border-0
                           file:text-sm file:font-semibold
                           file:bg-gray-800 file:text-gray-400
                           hover:file:bg-gray-700"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="markdown" className="block text-sm font-medium text-gray-400">
                                    Markdown File
                                </label>
                                <input
                                    id="markdown"
                                    type="file"
                                    accept=".md"
                                    onChange={(e) => setMarkdown(e.target.files[0])}
                                    required
                                    className="mt-1 block w-full text-sm text-gray-50
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-md file:border-0
                           file:text-sm file:font-semibold
                           file:bg-gray-800 file:text-gray-400
                           hover:file:bg-gray-700"
                                />
                            </div>
                            <button type="submit" className="w-full bg-black py-2 px-4 bg-primary-500 text-gray-50 rounded-md font-medium hover:bg-primary-600">
                                Submit
                            </button>
                        </form>
                    </div>

                </>)
            }



        </main>

    )
}

export default UploadBlog