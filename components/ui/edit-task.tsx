"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "./textarea"
import { useState } from "react"
import { Task } from "@/types/task"
import { useAppDispatch } from "@/hooks/hooks"
import { updateTask } from "@/lib/features/taskSlice/taskSlice"
import { DropdownMenuItem } from "./dropdown-menu"
import { useTranslation } from "@/hooks/useTranslation"

interface EditTaskProps {
  task: Task;
}

export function EditTaskDialog({ task }: EditTaskProps) {
  const dispatch = useAppDispatch()
  const { t } = useTranslation();

  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description || "")
  const [priority, setPriority] = useState<Task["priority"]>(task.priority || "medium")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim()) return

    const updatedTask: Task = {
      ...task,
      title,
      description,
      priority,
    }

    dispatch(updateTask(updatedTask))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          {t.table.edit_task}
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{t.table.edit_task}</DialogTitle>
            <DialogDescription>{t.table.update_detail_task}</DialogDescription>
          </DialogHeader>
          <FieldGroup className="py-4">
            <Field>
              <Label htmlFor="edit-title">{t.table.title}</Label>
              <Input id="edit-title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Field>
            <Field>
                <Label htmlFor="priority-1">Priority</Label>
                <Select value={priority} onValueChange={(value) => setPriority(value as Task["priority"])}>
                  <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectGroup>
                      <SelectItem value="low">{t.table.low}</SelectItem>
                      <SelectItem value="medium">{t.table.medium}</SelectItem>
                      <SelectItem value="high">{t.table.high}</SelectItem>
                      </SelectGroup>
                  </SelectContent>
                  </Select>
              </Field>
              <Field>
                <Label htmlFor="description-1">{t.table.description}</Label>
                <Textarea id="description-1" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="More details..." />
              </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{t.buttons.cancel}</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit">{t.buttons.save}</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}