"use client"

import { useAppSelector } from "@/hooks/hooks"
import { useGetColumns } from "@/components/task-table/columns"
import { DataTable } from "@/components/task-table/data-table"
import { useTranslation } from "@/hooks/useTranslation"

export default function HistoryPage() {
  const allTasks = useAppSelector((state) => state.tasks.tasks)
  const { t } = useTranslation();
  const columns = useGetColumns()
  const completedTasks = allTasks.filter(task => task.status === "completed")

  return (
    <div className="container w-full max-w-10/10 px-16 py-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{t.history.history}</h1>
        <p className="text-muted-foreground">
          {t.history.list_info}
        </p>
      </div>
      <DataTable columns={columns} data={completedTasks} />
    </div>
  )
}