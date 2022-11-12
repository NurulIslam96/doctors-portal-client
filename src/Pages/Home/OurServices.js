import React from 'react';
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const OurServices = () => {
    const hmService = [
        {   
            id: '1',   
            title: 'Fluoride Treatment',
            icon: `${flouride}`
        },
        {   
            id: '2',
            title: 'Cavity Filling',
            icon: `${cavity}`
        },
        {   
            id: '3',
            title: 'Teeth Whitening',
            icon: `${whitening}`
        },
    ]
    return (
        <div>
            <div className='text-center'>
                <h4 className='text-xl font-bold text-primary'>OUR SERVICES</h4>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='flex justify-between md:flex-row flex-col  mt-14 gap-8'>
                {
                    hmService.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default OurServices;