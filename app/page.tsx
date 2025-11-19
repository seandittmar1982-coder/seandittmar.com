import { getHello } from './actions/actions'
import Link from 'next/link'
import Hello from './components/hello'
export default async function Home() {
const resultFromServerAction = await getHello();


  return (
    <div className="card flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black pt-2 px-4">
      <div className="card">
        <h1 className="card">Hello from server component <code>page.tsx</code></h1>
        <p className='card'>Result from server action: <code>{resultFromServerAction}</code></p>
      </div>
      <div className="card">

        <Hello  />

      </div>
      
      <div className="card">
        <p>This is the profile page of Sean Dittmar.</p>
        <p><Link href="/">seandittmar.com</Link></p>
        <p><Link href="https://github.com/seandittmar1982-coder/seandittmar">Github Code</Link></p>
      </div>
    </div>
  );
}
