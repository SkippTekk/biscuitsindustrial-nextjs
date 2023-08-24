import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className={`container h-screen w-screen flex flex-col items-center justify-center`}
    >
      <span className="text-green-400 text-9xl font-bold">404</span>
      <span className="text-2xl mt-5">Danger, Will Robinson. Danger!</span>
      <Link href="/">
        <button className="bg-green-400 text-black p-3 rounded mt-10 font-bold hover:bg-green-500">
          Back Home
        </button>
      </Link>
    </div>
  );
}
