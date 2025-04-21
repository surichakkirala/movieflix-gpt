const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[15%]  px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block w-1/4 py-6 text-lg">{overview}</p>
      <div className="mt-6 md:mt-0">
        <button className="bg-white text-black p-2 md:p-4 px-8 md:px-12 text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-4 bg-gray-500 p-2 md:p-4 px-6 md:px-10 text-xl text-white rounded-lg bg-opacity-20">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
