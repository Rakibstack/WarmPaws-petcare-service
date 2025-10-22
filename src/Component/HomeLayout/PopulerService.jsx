import React from 'react';
import { useLoaderData } from 'react-router';

const PopulerService = () => {
    const datas = useLoaderData();

    return (
        <div className='py-5'>

              <h2 className='text-center py-8 text-4xl font-extrabold text-[#2D6A4F]'>Popular Winter Care Services.</h2>
            <div className='grid gap-5 lg:grid-cols-4 py-6'>
                {
                    datas.map(data => (
                        <div key={data.serviceId} className="card bg-base-200 full shadow-md">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Card Title
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
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