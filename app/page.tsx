import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>This is the profile page of Sean Dittmar.</p>
      <p><Link href="/">seandittmar.com</Link></p>
      <p><Link href="https://github.com/seandittmar1982-coder/seandittmar">Github Code</Link></p>
    </div>
  );
}
