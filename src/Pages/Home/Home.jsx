import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="p-3 h-screen w-full background-image: linear-gradient(to top right)  bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="container mx-auto flex items-center h-full">
                <div className="w-3/5">
                    <div className="text-white">
                        <p>Welcome to</p>
                        <p className="text-5xl font-bold uppercase text-pink-400 abrilFatface">Commentary Box</p>
                        <p className="text-2xl fontBriem">Here you can imporve your public speaking skills</p>
                        <p className="py-2">You must have OBS Studio for share your screen on facebook and youtube. and caputre only score-card section.</p>
                        <button className="bg-gradient-to-r mt-2 from-pink-500 to-blue-500 rounded-md p-2 px-5 hover:font-semibold duration-300">
                            <Link to={'/commentary'}>Go to commentary Box</Link>
                        </button>
                    </div>
                </div>
                <div className="w-2/5 ">
                    <img className="h-full" src={'undraw_podcast_re_wr88.svg'} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;