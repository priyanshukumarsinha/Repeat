import React, { type JSX } from "react";
import { HomeIcon } from "lucide-react";

import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "./lib/utils.ts";
import { Dock, DockIcon } from "./ui/dock";

// icons from react-icons
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";


const DATA = {
  navStart: [
    {
      name: "Home",
      url: "/",
      icon: HomeIcon,
    }
  ],
  actions: {
    "like": {
      name: "Like",
      url: "#",
      icon: BiLike,
    },
    "comment": {
      name: "Comment",
      url: "#",
      icon: FaRegComment,
    },
    "bookmark": {
      name: "Bookmark",
      url: "#",
      icon: FaRegBookmark,
    },
    "share": {
      name: "Share",
      url: "#",
      icon: IoShareSocialOutline,
    },
  },

}

export default function DockElement(): JSX.Element {
  return (
    <TooltipProvider>
      <Dock
        className="rounded-full bg-[#19191A] px-4 py-2 shadow-lg border border-[#222222]"
        direction="middle">
        {
          DATA.navStart.map((item) => (
            <DockIcon
              className="text-white"
              key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.url}
                    aria-label={item.name}
                    // open external links safely
                    target={item.url.startsWith("http") ? "_blank" : undefined}
                    rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-[#0f0f0fc4] hover:text-current",
                    )}
                  >
                    <item.icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))
        }

        <Separator orientation="vertical" className="h-full bg-[#272727]" />

        {Object.entries(DATA.actions).map(([name, social]) => (
          <DockIcon
            className="text-white"
            key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={social.url}
                  aria-label={social.name}
                  // open external links safely
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full hover:bg-[#0f0f0fc4] hover:text-current",
                  )}
                >
                  <social.icon className="size-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}


      </Dock>
    </TooltipProvider>
  );
}
