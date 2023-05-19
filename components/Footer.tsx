import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconExternalLink } from "@tabler/icons-react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="flex h-[50px] border-t border-gray-300 py-2 px-8 items-center justify-center hidden sm:flex">
      <div className="italic text-sm">
        Answers are AI-generated and not meant to constitute legal advice. Data sourced from 
        <a
          className="hover:opacity-50 mx-1"
          href="http://imigrasi.go.id/"
          target="_blank"
          rel="noreferrer"
        >
          imigrasi.go.id
        </a>
        .
      </div>
    </div>
  );
};
