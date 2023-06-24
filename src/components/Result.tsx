/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function Result() {
  return (
    <section className="bg-gradient-to-b from-[#6943FF] to-[#2F2CE9] pb-10 pt-6 px-[3.375rem] rounded-[2rem] text-blue-light w-full xmd:w-[23rem] tb:pb-[3.4375rem] tb:pt-[2.375rem]">
      <p className="font-bold text-lg text-center tb:text-2xl">Your Result</p>
      <div className="bg-gradient-to-b from-[#4D21C9] flex flex-col h-[12.5rem] items-center justify-center mb-6 mt-6 mx-auto rounded-full w-[12.5rem] tb:mb-7 tb:mt-[2.1875rem]">
        <div className="font-extrabold leading-[4.5rem] text-[3.5rem] text-white tb:text-[4.5rem]">
          76
        </div>
        <div className="font-bold opacity-50 text-base tb:text-lg">of 100</div>
      </div>
      <h2 className="font-bold text-2xl text-center text-white tb:text-[2rem]">
        Great
      </h2>
      <p className="font-medium mt-2 text-base text-center tb:mt-3.5 tb:text-lg">
        Your performance exceed 65% of the people conducting the test here!
      </p>
    </section>
  )
}
