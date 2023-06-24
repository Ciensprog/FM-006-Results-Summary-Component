import { Item } from '@/components/Item'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function Summary() {
  return (
    <section className="pb-[2.875rem] pt-[2.375rem] px-10 w-[23rem]">
      <h1 className="font-bold text-2xl">Summary</h1>
      <ul className="flex flex-col gap-4 mt-7 text-lg">
        <Item color="red" icon="flash" text="Reaction" value={80} />
        <Item color="yellow" icon="brain" text="Memory" value={92} />
        <Item color="green" icon="chat-remove" text="Verbal" value={61} />
        <Item color="blue" icon="eye" text="Visual" value={73} />
      </ul>
      <button className="bg-navy-dark from-[#6943FF] to-[#2F2CE9] font-bold mt-10 py-4 rounded-[8rem] text-lg text-white transition-all w-full hover:bg-gradient-to-b">
        Continue
      </button>
    </section>
  )
}
