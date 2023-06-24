/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function Result() {
  return (
    <section className="bg-gradient-to-b from-[#6943FF] to-[#2F2CE9] pb-[3.4375rem] pt-[2.375rem] px-[3.375rem] rounded-[2rem] text-blue-light w-[23rem]">
      <p className="font-bold text-2xl text-center">Your Result</p>
      <div className="bg-gradient-to-b from-[#4D21C9] flex flex-col h-[12.5rem] items-center justify-center mb-7 mt-[2.1875rem] mx-auto rounded-full w-[12.5rem]">
        <div className="font-extrabold leading-[4.5rem] text-[4.5rem] text-white">
          76
        </div>
        <div className="font-bold opacity-50 text-lg">of 100</div>
      </div>
      <h2 className="font-bold text-[2rem] text-center text-white">Great</h2>
      <p className="font-medium mt-3.5 text-center text-lg">
        Your performance exceed 65% of the people conducting the test here!
      </p>
    </section>
  )
}
