import React, { useEffect, useState } from 'react';
import sanityClient from './client';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await sanityClient.fetch(`*[_type == "article"]{
          _id,
          title,
          content,
          "imageUrl": image.asset->url
        }`);
                setArticles(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className="article-list">
            {articles.map((article) => (
                <div key={article._id} className="article">
                    <h2>{article.title}</h2>
                    {article.imageUrl && <img src={article.imageUrl} alt="" />}
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Articles;
