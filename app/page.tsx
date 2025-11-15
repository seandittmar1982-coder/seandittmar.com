import { getHello } from './actions/actions'
import Link from 'next/link'
import Hello from './components/hello'
export default async function Home() {
const resultFromServerAction = await getHello();


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hello from server component <code>page.tsx</code></h1>
      <p>Result from server action: {resultFromServerAction}
      </p>
      <Hello />
      
      <p>This is the profile page of Sean Dittmar.</p>
      <p><Link href="/">seandittmar.com</Link></p>
      <p><Link href="https://github.com/seandittmar1982-coder/seandittmar">Github Code</Link></p>
    </div>
  );
}
