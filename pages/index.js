import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello pages Router</h1>
      <div>
        <Link href="/cabins">Cabins</Link>
        <Link href="/about">About</Link>
        <Link href="/test">Test</Link>
        <Link href="/test/reem">Reem</Link>
      </div>
    </>
  );
}
