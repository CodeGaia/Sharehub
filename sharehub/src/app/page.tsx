import SignUp from "@/faculty-auth/signUp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <SignUp />
      </main>
    </div>
  );
}
