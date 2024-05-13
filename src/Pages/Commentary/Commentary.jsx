import { useState } from "react";
import { FaUpload } from "react-icons/fa";


const Commentary = () => {
    const [fastTeam, setFastTeam] = useState('');
    const [secondTeam, setSecondTeam] = useState('');
    const [run, setRun] = useState(0);
    const [wicket, setWicket] = useState(0);
    const [over, setOver] = useState(0);
    const [ball, setBall] = useState(0);

    const [playerOne, setPlayerOne] = useState('')
    const [playerOneRun, setPlayerOneRun] = useState(0)
    const [playerOneBall, setPlayerOneBall] = useState(0);
    const [playerOneImageUrl, setPlayerOneImageUrl] = useState('');
    const handleFileChangeOne = (event) => {
        const selectedFile = event.target.files[0]; // Get the first selected file
        if (selectedFile) {
            // Display the selected image
            const reader = new FileReader();
            reader.onload = (e) => {
                setPlayerOneImageUrl(e.target.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };


    const [playerTwo, setPlayerTwo] = useState('')
    const [playerTwoRun, setPlayerTwoRun] = useState(0)
    const [playerTwoBall, setPlayerTwoBall] = useState(0);
    const [playerTwoImageUrl, setPlayerTwoImageUrl] = useState('');
    const handleFileChangeTwo = (event) => {
        const selectedFile = event.target.files[0]; // Get the first selected file
        if (selectedFile) {
            // Display the selected image
            const reader = new FileReader();
            reader.onload = (e) => {
                setPlayerTwoImageUrl(e.target.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <div className="p-3 h-screen w-full background-image: linear-gradient(to top right)  bg-gradient-to-r from-red-500 to-indigo-500">
            <div className="container mx-auto flex items-center h-full gap-4 justify-center">
                <div className="h-[500px] w-[900px] bg-slate-600 p-4 px-10 text-slate-100">
                    <div>
                        <p className="text-4xl font-bold text-center text-white fontBriem"><span>{fastTeam}</span> v/s <span>{secondTeam}</span></p>
                    </div>
                    <div className="p-5 rounded-md bg-[#333] mt-5 mx-auto h-[50%]">
                        <p className="abrilFatface font-bold text-9xl text-center"><span>{run}</span>/<span>{wicket}</span></p>
                        <hr className="my-2 w-1/2 mx-auto" />
                        <p className="abrilFatface font-bold text-4xl text-center">{over}.{ball}</p>
                    </div>
                    <div className="flex justify-between z-10 h-[15%]">
                        <div className="w-1/3 z-0 relative">
                            {playerOneImageUrl && (
                                <div className="absolute -bottom-10 w-full">
                                    <img className="w-full z-0 mx-auto" src={playerOneImageUrl} />
                                </div>
                            )}
                        </div>
                        <div className="w-1/3 z-0 relative">
                            {playerTwoImageUrl && (
                                <div className="absolute -bottom-10 w-full">
                                    <img className="w-full z-0 mx-auto" src={playerTwoImageUrl} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex z-20 justify-between">
                        <div className="w-1/3 bg-[#333] rounded-md z-20 p-2">
                            <p className="text-center font-bold text-2xl">{playerOne? playerOne : "Player Name"}</p>
                            <p className="text-center font-light text-2xl">{playerOneRun} <span>({playerOneBall})</span></p>
                        </div>
                        <div className="w-1/3 bg-[#333] rounded-md z-20 p-2">
                            <p className="text-center font-bold text-2xl">{playerTwo ? playerTwo : "Player Name"}</p>
                            <p className="text-center font-light text-2xl">{playerTwoRun} <span>({playerTwoBall})</span></p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 h-full flex flex-col justify-center">
                    <div className="rounded-md bg-white/20 shadow-md w-full p-2 text-white">
                        <p className="text-center font-bold text-2xl">Score Card</p>
                        <form className="">
                            <div className="flex gap-2 py-1">
                                <input onChange={() => setRun(event.target.value)} type="number" placeholder="Run" className="input input-bordered w-1/2" />
                                <input onChange={() => setWicket(event.target.value)} type="number" placeholder="Wictet" className="input input-bordered w-1/2" />
                            </div>
                            <div className="flex gap-2 py-1">
                                <input onChange={() => setOver(event.target.value)} type="number" placeholder="Over" className="input input-bordered w-1/2" />
                                <input onChange={() => setBall(event.target.value)} type="number" placeholder="Ball" className="input input-bordered w-1/2" min={0} max={6} />
                            </div>
                        </form>
                    </div>

                    <div className="rounded-md bg-white/20 shadow-md w-full p-2 text-white mt-2">
                        <p className="text-center font-bold text-2xl">Players</p>
                        <form className="pt-1">
                            <div className="flex gap-1">
                                <input onChange={() => setPlayerOne(event.target.value)} type="text" className="input input-bordered w-2/5" placeholder="Player-1" />
                                <input onChange={() => setPlayerOneRun(event.target.value)} type="number" className="input input-bordered w-1/5" placeholder="run" />
                                <input onChange={() => setPlayerOneBall(event.target.value)} type="number" className="input input-bordered w-1/5" placeholder="ball" />
                                <div className="w-1/5 flex justify-center items-center rounded-lg bg-slate-800">
                                    <input
                                        style={{
                                            display: "none"
                                        }}
                                        accept=".jpg, .jpeg, .png"
                                        id="choose-file"
                                        type="file"
                                        onChange={handleFileChangeOne}
                                    />
                                    <label htmlFor="choose-file">
                                        <FaUpload />
                                    </label>
                                </div>
                            </div>
                        </form>
                        <form className="py-1">
                            <div className="flex gap-1">
                                <input onChange={() => setPlayerTwo(event.target.value)} type="text" className="input input-bordered w-2/5" placeholder="Player-1" />
                                <input onChange={() => setPlayerTwoRun(event.target.value)} type="number" className="input input-bordered w-1/5" placeholder="run" />
                                <input onChange={() => setPlayerTwoBall(event.target.value)} type="number" className="input input-bordered w-1/5" placeholder="ball" />
                                <div className="w-1/5 flex justify-center items-center rounded-lg bg-slate-800">
                                    <input
                                        style={{
                                            display: "none"
                                        }}
                                        accept=".jpg, .jpeg, .png"
                                        id="choose-file-2"
                                        type="file"
                                        onChange={handleFileChangeTwo}
                                    />
                                    <label htmlFor="choose-file-2">
                                        <FaUpload />
                                    </label>
                                </div>
                            </div>
                        </form>

                    </div>

                    <div className="rounded-md bg-white/20 shadow-md w-full p-2 text-white mt-2">
                        <p className="text-center font-bold text-2xl">Teams Name</p>
                        <form className="mt-2">
                            <div className="flex gap-2">
                                <input onChange={() => setFastTeam(event.target.value)} type="text" placeholder="fast team" className="input input-bordered w-1/2" />
                                <input onChange={() => setSecondTeam(event.target.value)} type="text" placeholder="Second team" className="input input-bordered w-1/2" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Commentary;