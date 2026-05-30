import { useState, type JSX } from "react";
import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
import { FaCheck } from "react-icons/fa6";

import { animate } from "motion/react";


interface DockElementProps {
  commentRef: React.RefObject<HTMLDivElement | null>;
}

export default function DockElement({ commentRef }: DockElementProps ): JSX.Element {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [shared, setShared] = useState(false);
  const goHome = () => {
    navigate('/');
  }

  const sendLike = () => {
    setLiked((prev) => !prev);
    // call backend
    try {
      // if initial state was liked
      if (liked) {
        // call backend for delete like
      }
      else {
        // call backend for like
      }
    } catch (error) {
      // back to original state
      setLiked(prev => !prev);
    }
  }

  const openComment = () => { 
    // open comment section
    const targetY = commentRef?.current?.offsetTop || 0;

    animate(window.scrollY, targetY-10, {
      duration: 0.75,
      onUpdate(value) {
        window.scrollTo(0, value);
      },
    });
  }
  const toogleBookmark = () => {
    setBookmarked((prev) => !prev);

    // same as like but for bookmark
    try {
      if (bookmarked) {
        // call backend for delete bookmark
      }
      else {
        // call backend for bookmark
      }
    } catch (error) {
      setBookmarked(prev => !prev);
    }
  }
  const createShare = () => { 
    // create share link
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        // show some feedback to user
        // change the icon temporarily to a check icon or something
        setShared(true);
        // TODO: show a toast that link is copied

        setTimeout(() => {
          setShared(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }


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
        icon_done: FaCheck,
        done: shared,
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
