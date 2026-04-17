
import { useState } from 'react';
import { DataContext } from './ContextFile';


const FriendContext = ({children}) => {
     const [clicked,setClicked] = useState([]);
    const data = {
        clicked,
        setClicked,
    };
    return (
        <DataContext.Provider value = {data}>{children}</DataContext.Provider>
    );
};

export default FriendContext;