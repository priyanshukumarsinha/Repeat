import { useState, type JSX } from "react";
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
import { FaBookmark } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";

export default function DockElement(): JSX.Element {
  // const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const goHome = () => {
    // navigate('/');
   }
  const sendLike = () => {
    console.log("Liked!");
    setLiked((prev) => !prev);
  }
  const openComment = () => { }
  const toogleBookmark = () => { 
    setBookmarked((prev) => !prev);
  }
  const createShare = () => { }

  console.log("Liked:", liked);
  console.log("Bookmarked:", bookmarked);

  const DATA = {
    navStart: [
      {
        name: "Home",
        action: goHome,
        icon: HomeIcon,
        icon_done: HomeIcon,
        done: false,
      }
    ],
    actions: {
      "like": {
        name: "Like",
        action: sendLike,
        icon: BiLike,
        icon_done: BiSolidLike,
        done: liked,
      },
      "comment": {
        name: "Comment",
        action: openComment,
        icon: FaRegComment,
        icon_done: FaRegComment,
        done: false,
      },
      "bookmark": {
        name: "Bookmark",
        action: toogleBookmark,
        icon: FaRegBookmark,
        icon_done: FaBookmark,
        done: bookmarked,
      },
      "share": {
        name: "Share",
        action: createShare,
        icon: IoShareSocialOutline,
        icon_done: IoShareSocialOutline,
        done: false,
      },
    },

  }
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

                  <div
                    aria-label={item.name}
                    onClick={item.action}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-[#0f0f0fc4] hover:text-current",
                    )}
                  >
                    {
                      item.done ? <item.icon_done className="size-4" /> : <item.icon className="size-4" />
                    }
                  </div>
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
                <div
                  aria-label={social.name}
                  onClick={social.action}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full hover:bg-[#0f0f0fc4] hover:text-current",
                  )}
                >
                  {
                      social.done ? <social.icon_done className="size-4" /> : <social.icon className="size-4" />
                  }
                </div>
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
