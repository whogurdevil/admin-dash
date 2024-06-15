import "./globals.css";
import { redirect } from "next/navigation";
export default function Page() {
  redirect("/home");
  return <h1>Hello, Home page!</h1>;
}
