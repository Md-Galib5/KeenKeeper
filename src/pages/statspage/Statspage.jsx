import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { DataContext } from '../../context/ContextFile';


const Statspage = () => {
    const {clicked,setClicked} = useContext(DataContext);

    const countByType = (type) =>
  clicked.filter((item) => item.action.toLowerCase() === type).length;

const data = [
  { name: 'Meetup', value: countByType('meetup'), fill: '#0088FE' },
  { name: 'Text', value: countByType('text'), fill: '#FFBB28' },
  { name: 'Video', value: countByType('video'), fill: '#FF8042' },
];
    return (
        <div className=' bg-[#f8fafc]'>
            <div className='w-11/12 sm:w-8/11 mx-auto pt-6 pb-10'>
            <h2 className='text-5xl font-bold pb-6'>Friendship Analytics</h2>
            <div className='bg-white'>
            <h2 className='pt-4 pl-4 font-semibold text-md' >By Interaction Type</h2>
              <PieChart style={{ width: '100%', maxWidth: '200px', maxHeight: '80vh', aspectRatio: 1,margin:'auto' }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
    <Legend />
    <Tooltip />
    </PieChart>
    </div>
        </div>
        </div>
    );
};

export default Statspage;