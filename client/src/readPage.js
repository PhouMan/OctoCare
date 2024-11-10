// src/ReadPage.js

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ReadPage.css'; // Existing styles
import HeaderNav from './HeaderNav'; // Import the HeaderNav component

const ReadPage = ({ file }) => {
    const { id } = useParams(); // Get the ID from the URL
    const [content, setContent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                setIsLoading(true);
                // Use the file prop passed from the route
                const response = await fetch(`/content/${file}`);

                if (!response.ok) {
                    throw new Error(`Failed to load content for section ${id}`);
                }

                const data = await response.json();
                setContent(data);
                setError(null);
            } catch (err) {
                console.error("Fetch Error:", err); // Enhanced error logging
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchContent();
    }, [file, id]);

    const renderContent = (section, index) => {
        switch (section.type) {
            case 'text':
                return (
                    <div key={index} className="text-section">
                        {section.content}
                    </div>
                );

            case 'image':
                return (
                    <div key={index} className="image-section">
                        <img src={section.url} alt={section.alt} />
                    </div>
                );

            case 'references':
                return (
                    <div key={index} className="references-section">
                        <h3>References</h3>
                        <ul>
                            {section.items.map((ref, i) => (
                                <li key={i}>{ref}</li>
                            ))}
                        </ul>
                    </div>
                );

            default:
                return null;
        }
    };

    if (isLoading) {
        return (
            <div className="read-page loading">
                Loading content for section {id}...
            </div>
        );
    }

    if (error) {
        return (
            <div className="read-page error">
                Error: {error}
            </div>
        );
    }

    if (!content) {
        return (
            <div className="read-page no-content">
                No content available for section {id}
            </div>
        );
    }

    return (
        <>
            <HeaderNav title={content.title} backLink="/section1/" />
                <div className="read-page">
            <main className="content-container">
                {content.sections.map((section, index) => renderContent(section, index))}
            </main>

        </div>
        </>
       
    );
};

export default ReadPage;
