"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { BadgeCheck, Bell, ChevronRight, ChevronsUpDown, LogOut, Sparkles, SquareMenu } from "lucide-react"
import { NavBar } from "@/types/navbar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { CollapsibleContent, CollapsibleTrigger, Collapsible } from "./collapsible"
import Link from "next/link"
import { useAppSelector, useAppDispatch } from "@/hooks/hooks"
import { logout } from "@/lib/features/authSlice/authSlice"
import { SignUpDialog } from "./signup"
import { LoginDialog } from "./login"
import { useTranslation } from "@/hooks/useTranslation"


function NavUser() {
  const { isMobile } = useSidebar()
  const { t } = useTranslation();

  const dispatch = useAppDispatch()
  const { isAuthenticated, user } = useAppSelector((state) => state.auth)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user?.avatar} alt={user?.name || t.sidebar.guest} />
                <AvatarFallback className="rounded-lg">{user?.name?.[0] || "G"}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user?.name || t.sidebar.guest_user}</span>
                <span className="truncate text-xs">{user?.email || t.sidebar.not_logged_in}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            {isAuthenticated ? (
              <>
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user?.name}</span>
                    <span className="truncate text-xs">{user?.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                {t.sidebar.upgrade}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/account" className="flex items-center gap-2 cursor-pointer">
                  <BadgeCheck className="w-4 h-4" />
                  {t.sidebar.account}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                {t.sidebar.notifications}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => dispatch(logout())}>
                <LogOut />
                {t.sidebar.logout}
              </DropdownMenuItem>
            </DropdownMenuGroup>
              </> ) : (
          <>
            <DropdownMenuGroup>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="p-0">
                <LoginDialog />
              </DropdownMenuItem>
              
              <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="p-0">
                <SignUpDialog />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
          )}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export function AppSidebar() {
  const { t } = useTranslation();
  
  const Navs: NavBar[] = [
    {
      title: t.sidebar.menu,
      url: "#",
      icon: SquareMenu,
      isActive: true,
      items: [
        {
          title: t.sidebar.tasks,
          url: "/",
        },
        {
          title: t.sidebar.history,
          url: "/history",
        },
      ],
    },
  ]

  const { dir } = useAppSelector((state) => state.auth)

  return (
    <Sidebar side = {dir === "ltr" ? "left" : "right"}>
      <SidebarHeader>
        <SidebarMenu>
          <h1>Tasky</h1>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t.sidebar.platform}</SidebarGroupLabel>
          <SidebarMenu>
            {Navs.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        {/* <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            {Navs.map((nav) => (
              <SidebarMenuButton asChild>
                <a href={nav.link}>{nav.name}</a>
              </SidebarMenuButton>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>  */}
      </SidebarContent>
      
      <SidebarFooter>
        <NavUser/>
      </SidebarFooter>
    </Sidebar>
  )
}