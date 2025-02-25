import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";

export const projects = [
  {
    id: "wallet",
    title: "Web based wallet",
    tech: ["Ethereum", "Solana", "Next.js", "TypeScript", "TailwindCSS"],
    description:
      "A web based wallet that generates multiple wallets of Ethereum and Solana.",
    github: "https://github.com/jaydattkaran/web_based_wallet",
    website: "https://github.com/jaydattkaran/web_based_wallet",
  },
  {
    id: "course-seller",
    title: "Course selling application",
    tech: ["JavaScript", "React.js", "MongoDB", "TailwindCSS"],
    description:
      "A course selling application having separate dashboard for user & admin and a common landing page.",
    github: "https://github.com/jaydattkaran/course_seller",
    website: "https://github.com/jaydattkaran/course_seller",
  },
  {
    id: "instasnap",
    title: "Instasnap",
    tech: ["React", "TypeScript", "Appwrite", "TailwindCSS"],
    description:
      "A social media application having features of create, edit, like & save post. Also a customised user profile dashboard.",
    github: "https://github.com/jaydattkaran/instasnap_",
    website: "https://social-instasnap.netlify.app/",
  },
  {
    id: "fichain",
    title: "Fichain (decentralized fiverr)",
    tech: ["React.js", "TailwindCSS", "MongoDB", "JavaScript"],
    description:
      "Ecommerce application like fiverr has decentralized payment method",
    github: "https://github.com/jaydattkaran/fichain_fullstack",
    website: "https://github.com/jaydattkaran/fichain_fullstack",
  },
  {
    id: "musicova",
    title: "Musicova",
    tech: ["HTML/CSS", "JavaScript"],
    description:
      "Music application that allows user to enjoy music and can download to local storage",
    github: "https://github.com/jaydattkaran/musicova",
    website: "https://github.com/jaydattkaran/musicova",
  },
  {
    id: "game",
    title: "Terminal Game",
    tech: ["JavaScript", "npmjs"],
    description:
      "A terminal based game that allows user to experient their info about techs",
    github: "https://github.com/jaydattkaran",
    website: "https://www.npmjs.com/package/codegames",
  },
];

interface ProjectPageProps {
  id: string;
  title: string;
  tech: string[];
  description: string;
  github: string;
  website: string;
  index: number;
}

const ProjectPage = ({
  title,
  github,
  website,
  description,
  tech,
}: ProjectPageProps) => {
  return (
    <>
    <div>hello from the page</div>
      <div className="border cardhover border-neutral-900 hover:border-neutral-400 glass-box duration-200  lg:min-h-[18rem] rounded-lg px-4 py-4">
        <div className="flex flex-col gap-2">
          <Link href={github}>
            <Image src="/globe.svg" height={50} width={50} alt="alt" />
          </Link>
          <div>
            <div className="flex justify-between">
              <div className="font-semibold md:text-lg">{title}</div>
              <div className="flex gap-4 justify-end md:text-md text-sm">
                <Link href={github}>GT</Link>
                <Link href={website}>WB</Link>
              </div>
            </div>
            <div className="md:text-md text-sm mb-2">{description}</div>
            {tech.map((tech, index) => (
              <Badge key={index} variant="default" className="mb-1 mr-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
