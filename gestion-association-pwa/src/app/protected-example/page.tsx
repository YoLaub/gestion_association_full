import { SignedIn } from "@clerk/nextjs";

export default function ProtectedExamplePage() {
    return <SignedIn><div>Protected Example Page - You are signed in!</div></SignedIn>;
}