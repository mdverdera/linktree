import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import data from "../data.json";
import {
  ArrowDownCircleIcon,
  ArchiveBoxArrowDownIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto w-full mt-16 px-8">
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
        <div className="flex items-center gap-4 mt-8">
          {data.socials.map((link) => {
            if (link.href.includes("twitter")) {
              return (
                <ArrowDownCircleIcon key={link.href} className="w-8 h-8" />
              );
            }
            if (link.href.includes("github")) {
              return (
                <ArchiveBoxArrowDownIcon key={link.href} className="w-8 h-8" />
              );
            }
          })}
        </div>
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
      className="flex items-center p-1 mb-3 w-full rounded-md 
      bg-gray-100 max-w-3xl
      hover:scale-105 transition-all"
    >
      <div className="flex w-full text-center">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold text-gray-700 w-full -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}
