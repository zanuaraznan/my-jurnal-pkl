import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
   return (
      <div className="p-4 bg-zinc-800 flex-1 rounded-2xl flex flex-col items-center">
         <div className="flex items-center gap-4">
            <Image src={"/smk3.png"} width={500} height={500} alt="" className="w-12" />
            <Link href="/" className="text-lg font-semibold hover:text-violet-300">
               E-Jurnal PKL
            </Link>
         </div>
         <div className="p-8 flex flex-col gap-4">
            <Image
               src="/smk3.png"
               width={500}
               height={500}
               alt=""
               className="w-24 p-2 aspect-square outline outline-1 outline-zinc-600 transition-all cursor-pointer hover:outline-4 hover:scale-[102%] rounded-full"
            />
         </div>
      </div>
   );
};

export default Sidebar;
