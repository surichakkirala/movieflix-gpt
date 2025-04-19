const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className=" w-1/4 py-6 text-lg">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-gray-500 p-4 px-10 text-xl text-white rounded-lg bg-opacity-20">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
