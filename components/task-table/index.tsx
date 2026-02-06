"use client"

import { useAppSelector } from "@/hooks/hooks"
import { LoginDialog } from "../ui/login"
import { LogIn } from "lucide-react"
import { useGetColumns } from "./columns"
import { DataTable } from "./data-table"
import { useTranslation } from "@/hooks/useTranslation"

export default function TaskTable() {
  const { isAuthenticated } = useAppSelector((state) => state.auth)
  const tasks = useAppSelector((state) => state.tasks.tasks)
  const columns = useGetColumns()
  const { t } = useTranslation();

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.status === "completed" && b.status !== "completed") return 1;
    if (a.status !== "completed" && b.status === "completed") return -1;
    return 0;
  });

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center">
        <div className="bg-muted p-6 rounded-full">
          <LogIn className="w-12 h-12 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">{t.sidebar.welcome}</h2>
          <p className="text-muted-foreground max-w-[400px]">
            {t.sidebar.login_features}
          </p>
        </div>
        <div className="place-items-center">
          <LoginDialog /> 
        </div>
      </div>
    )
  }

  return (
    <div className="container w-full max-w-10/10 pl-10 pr-10 py-10">
      <DataTable columns={columns} data={sortedTasks} />
    </div>
  )
}