"use client"

import { toggleLanguage } from "@/lib/features/authSlice/authSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { Button } from "./button";
import { IconLanguage } from "@tabler/icons-react";
import { ThemeToggle } from "./theme-toggle";

export function LanguageToggle() {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.auth.lang);

  return (
    <div className="flex place-self-end mb-5">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full w-10 h-10"><IconLanguage stroke={2} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => dispatch(toggleLanguage("en"))}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => dispatch(toggleLanguage("fa"))}>فارسی</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggle/>
    </div>
    
  );
}