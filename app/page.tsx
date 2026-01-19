import { redirect } from "next/navigation";

// Redirect root path to home page
export default function RootPage() {
  redirect("/home");
}
