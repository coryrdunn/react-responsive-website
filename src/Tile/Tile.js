import React from 'react';
import './Tile.css';

export default ({img = "", title = "Unknown Title"}) => (
    <div className="tile">
        <figure>
            <img src={img} alt="" />
        </figure>
        <section>
            <h2>{title}</h2>
        </section>
    </div>
);