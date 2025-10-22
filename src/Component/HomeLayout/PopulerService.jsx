import React from 'react';
import { useLoaderData } from 'react-router';

const PopulerService = () => {
    const datas = useLoaderData();
    

    return (
        <div className='py-5'>

              <h2 className='text-center py-8 text-4xl font-extrabold text-[#2D6A4F] '>Popular Winter Care Services.</h2>
            <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6'>
                {
                    datas.map(data => (
                        <div key={data.serviceId} className="card hover:shadow-2xl  hover:scale-106 transition duration-400 hover:shadow-green-400/40 ease-in-out h-96 bg-base-100 full shadow-md">
                            <figure className='p-3'>
                                <img className='rounded-lg '
                                    src={data.image}
                                    alt="Cute dogs" />
                            </figure>
                            <div className="card-body space-y-3">
                                <h2 className="card-title text-[#2D6A4F]">
                                   {data.serviceName}
                                </h2>
                                <div className="card-actions ">
                                    <div className="badge badge-outline text-[#2D6A4F]"> Price {data.price}</div>
                                    <div className="badge badge-outline text-[#2D6A4F]">Rating  {data.rating}</div>
                                </div>
                                <div className='px-4 py-2 rounded-md bg-[#2D6A4F] text-white w-[120px]'>
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopulerService;