
import Banner from "../component/Banner";
import FeaturedRooms from "../component/FeaturedRooms";
import HotelLocation from "../component/HotelLocation";
import Newsletter from "../component/Newsletter";
import Userreview from "../component/Userreview";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <HotelLocation></HotelLocation>
            <Newsletter></Newsletter>
            <FeaturedRooms></FeaturedRooms>
            <Userreview></Userreview>
        </div>
    );
};

export default Home;