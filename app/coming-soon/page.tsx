import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f3] text-[#111111] dark:bg-[#0a0f12] dark:text-white">

      <Navbar />
      <div className="pt-60 text-5xl text-black dark:text-white text-center" >
        Coming soon , we are working on these 
      </div>
    
    </div>
  );
}
