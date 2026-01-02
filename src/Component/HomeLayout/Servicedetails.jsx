import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const Servicedetails = () => {
    const { id } = useParams();
    const paramid = parseInt(id);
    const data = useLoaderData();
    // console.log(data, typeof paramid);

    const singleitem = data.find(service => service.serviceId == paramid)
    const Handlesubmit = (e) => {
        e.preventDefault();
        toast.success("Your Book Service is successfull");
        e.target.reset();
    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className=" bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col  md:flex-row hover:shadow-2xl transition duration-300">
                <div className="md:w-1/2">
                    <img
                        src={singleitem.image}
                        alt={singleitem.serviceName}
                        className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>


                {/* Right side - Details */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between bg-gradient-to-tr from-pink-50 via-white to-indigo-50">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            {singleitem.serviceName}
                        </h2>
                        <p className="text-sm text-gray-600 mb-3">
                            Category: <span className="font-medium">{singleitem.category}</span>
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            {singleitem.description}
                        </p>


                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-yellow-500 font-medium">★ {singleitem.rating}</span>
                            <span className="text-gray-500">| Slots: {singleitem.slotsAvailable}</span>
                        </div>


                        <p className="text-lg font-bold text-gray-900 mb-4">
                            ${singleitem.price} <span className="text-sm text-gray-500">/ each</span>
                        </p>


                        <p className="text-sm text-gray-600 mb-2">
                            Provider: <span className="font-medium">{singleitem.providerName}</span>
                        </p>
                        <p className="text-sm text-gray-600">
                            Email: <a href={`mailto:${singleitem.providerEmail}`} className="text-indigo-500 underline">{singleitem.providerEmail}</a>
                        </p>
                    </div>


                    <div className="mt-6 flex gap-3">
                        <a
                            href={`mailto:${singleitem.providerEmail}`}
                            className="px-4 py-2 border border-indigo-400 text-indigo-600 rounded-lg hover:bg-indigo-100 transition"
                        >
                            Contact Provider
                        </a>
                        <button
                            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

                <div className=" flex items-center justify-center bg-gray-50 p-6">
                    <div className="w-full mt-10 max-w-lg bg-white rounded-2xl shadow-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">Book Service</h2>

                        <form onSubmit={Handlesubmit}   className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    required
                                    type="text"
                                    placeholder="Your name"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                />
                            </div>


                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                   required
                                    id="email"
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                                />
                            </div>

                            <div>
                                  <Toaster />
                                <button
                                  
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
           
        </div>
    );
};

export default Servicedetails;