"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Task } from "@/types/task"
import { useAppDispatch } from "@/hooks/hooks"
import { deleteTask } from "@/lib/features/taskSlice/taskSlice"
import { EditTaskDialog } from "../ui/edit-task"
import { useTranslation } from "@/hooks/useTranslation"

export const useGetColumns = (): ColumnDef<Task>[] => {
  const dispatch = useAppDispatch()
  const { t, lang } = useTranslation()

  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="mx-1" 
        />
      ),
      cell: ({ row }) => {
        const dispatch = useAppDispatch(); // دسترسی به دیسپچ
        const { toggleTaskStatus } = require("@/lib/features/taskSlice/taskSlice");

        return (
          <Checkbox
            checked={row.original.status === "completed"}
            onCheckedChange={() => {
              dispatch(toggleTaskStatus(row.original.id));
            }}
            aria-label="Select row"
          />
        );
      },
    },
    {
      accessorKey: "title",
      header: t.table.title, // استفاده از ترجمه
    },
    {
      accessorKey: "status",
      header: t.table.status, // استفاده از ترجمه
    },
    {
      accessorKey: "priority",
      header: t.table.priority, // استفاده از ترجمه
    },
    {
      accessorKey: "createdAt",
      header: t.table.createdAt, // استفاده از ترجمه
      cell: ({ row }) => {
        const dateValue = row.original.createdAt;
        if (!dateValue) return <span className="text-muted-foreground">-</span>;

        return (
          <span suppressHydrationWarning>
            {/* نمایش تاریخ بر اساس زبان فعلی */}
            {new Date(dateValue).toLocaleDateString(lang === "fa" ? "fa-IR" : "en-US")}
          </span>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const task = row.original
        
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={lang === "fa" ? "start" : "end"}>
              <DropdownMenuLabel>{t.table.actions}</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => {dispatch(deleteTask(task.id))}} className="text-red-600">
                {t.buttons.delete}
              </DropdownMenuItem>
              <EditTaskDialog task={task} />
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
}