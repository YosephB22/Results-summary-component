const Result = () => {
  return (
    <div className="flex flex-col w-full bg-light-royal-blue rounded-b-3xl md:rounded-3xl p-[2.5rem] text-center items-center gap-5">
      <h1 className="text-slate-400 font-bold">Your Result</h1>
      <div className="w-[12rem] rounded-[50%] aspect-square bg-gradient-to-b from-violet-blue to-persian-blue flex justify-center items-center flex-col">
        <p className="text-7xl text-white font-bold">76</p>
        <p className="text-slate-400">of 100</p>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-white font-bold">Great</h1>
        <p className="text-slate-400">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  );
};

export default Result;
