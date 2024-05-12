import { useEffect, useState } from "react";
import FeaturedroomsDetails from "./FeaturedroomsDetails";


const FeaturedRooms = () => {
    const [rooms, setrooms] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/roomdataall')
            .then(res => res.json())
            .then(data => setrooms(data))
    }, [])
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
            <div className="container  mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        rooms.map(room => <FeaturedroomsDetails room={room}></FeaturedroomsDetails>)
                    }

                </div>
            </div>
        </section>
    );
};

export default FeaturedRooms;