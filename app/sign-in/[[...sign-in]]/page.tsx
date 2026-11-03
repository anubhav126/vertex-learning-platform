import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas p-6 dark:bg-[#0B0F17]">
      <Suspense>
        <SignIn />
      </Suspense>
    </div>
  );
}
