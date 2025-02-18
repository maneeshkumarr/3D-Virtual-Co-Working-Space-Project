import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our 3D Virtual Co-Working Space</h1>
      <p className="mb-8">Collaborate, create, and innovate in a virtual environment!</p>
      <Link href="/login">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg">
          Sign In
        </button>
      </Link>
    </main>
  );
}
