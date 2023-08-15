import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col gap-10 items-center w-1/3">
      <h5 className="text-stone-400 text-lg">
        Passionate Web Developer Crafting Engaging Experiences
      </h5>
      <Image
        src={""}
        alt=""
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="font-[500] text-xl text-center">
        👋 Welcome! I'm <span className="font-[600]">Akshit Goyal</span>, a
        full-stack web developer driven by a love for detail and a flair for
        creating captivating web experiences. From just wire frames to beautiful
        code, I transform ideas into digital enchantment.
      </p>
      <div className="flex gap-5">
        <Link href="/">Linkedin</Link>
        <Link href="/">Twitter</Link>
        <Link href="/">Github</Link>
      </div>
    </div>
  );
};

export default Hero;
