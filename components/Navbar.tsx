import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { FC } from "react";
import king from "../public/king.png";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[60px] border-b border-gray-300 py-2 px-4 sm:px-8 items-center sm:justify-between justify-center">
      <div className="font-semibold sm:text-2l md:text-2xl flex items-center">
        <div className="ml-2">
            AI-powered Q&A on Imigrasi.go.id
        </div>
      </div>
      <div className="flex space-x-4 hidden sm:flex">
      </div>
    </div>
  );
};
