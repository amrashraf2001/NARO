import React from 'react';
import ParagraphNavigator from './ParagraphNavigator';
import '../Styles.css';

const Card = ({ title, img, paragraphs }) => (
    <div className="section">
        <h2 style={{color:'black', fontSize:'bold',display:'center',justifyContent:'center'}}>{title}</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={img} alt={title} style={{ width: "100%" }} />
        </div>
        <div style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '15px',
            borderRadius: '5px',
            fontSize: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
        }}>
            <ParagraphNavigator paragraphs={paragraphs} />
        </div>
    </div>
);

export default Card;
