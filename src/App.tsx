import { Attribution } from '@/components/Attribution'
import { Result } from '@/components/Result'
import { Summary } from '@/components/Summary'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function App() {
  return (
    <>
      <main className="my-10 z-10">
        <div className="bg-white flex rounded-[2rem] shadow-[0_30px_60px_rgb(61_108_236_/_0.15)]">
          <Result />
          <Summary />
        </div>
      </main>

      <Attribution />
    </>
  )
}
