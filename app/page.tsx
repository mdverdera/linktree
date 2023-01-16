import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import data from "../data.json";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center mx-auto w-full mt-16 ">
        <Image
          className="rounded-full"
          alt={data.name}
          src={data.avatar}
          width={96}
          height={96}
        />
        <h1 className="font-bold mt-4 mb-8 text-xl">{data.name}</h1>
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
      </div>
    </>
  );
}

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-4 rounded-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col">
        {/* <Image
          className="rounded-full"
          alt={title}
          src={image}
          width={45}
          height={45}
        /> */}
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </a>
  );
}
