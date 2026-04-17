import React, { useContext } from 'react';
import { DataContext } from '../../context/ContextFile';


const Timeline = () => {
    const {clicked,setClicked} = useContext(DataContext);
    console.log(clicked);
    return (
        <div>
            
        </div>
    );
};

export default Timeline;