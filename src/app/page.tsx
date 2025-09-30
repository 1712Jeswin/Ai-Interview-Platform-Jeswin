import { ThemeToggle } from "@/components/Theme-Toggle";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function HomePage(){
  return(
    <>
    <SignInButton/>
    <UserButton />
    <ThemeToggle />
    </>
  )
}