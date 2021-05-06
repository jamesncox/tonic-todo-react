import MatrixScroll from "../assets/matrix-scroll-code.webp";

export default function Loader() {
  return (
    <>
      <div className="mx-5 justify-center mt-32 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="h-44 md:h-64 bg-black rounded rounded-b-none">
              <img
                width="480"
                src={MatrixScroll}
                alt="Gif of The Matrix code scrolling effect"
              />
            </div>
            <div className="flex justify-center p-2 bg-matrix-green-hover">
              <h3 className="text-2xl text-black font-mono font-bold">
                COMPILING...
              </h3>
            </div>
            <div className="h-44 md:h-64 bg-black rounded rounded-t-none">
              <img
                width="480"
                src={MatrixScroll}
                alt="Gif of The Matrix code scrolling effect"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
