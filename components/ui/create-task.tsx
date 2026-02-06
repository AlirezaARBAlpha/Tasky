import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
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
import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import { useState } from "react"
import { Task } from "@/types/task"
import { addTask } from "@/lib/features/taskSlice/taskSlice"
import { useTranslation } from "@/hooks/useTranslation"

export function CreateTaskDialog() {

  const task = useAppSelector((state) => state.tasks.tasks)
  const dir = useAppSelector((state) => state.auth.dir)
  const dispatch = useAppDispatch()
  const { t } = useTranslation();

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState<Task["priority"]>("medium")
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim()) return

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      priority,
      status: "todo",
      createdAt: new Date().toISOString(),
    }
    dispatch(addTask(newTask))
    
    setTitle("")
    setDescription("")
    setPriority("medium")
  }
  
  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{t.buttons.add}</Button>
        </DialogTrigger>
        <DialogContent dir={dir} className="sm:max-w-sm">
          <form className="" onSubmit={handleSubmit}>
            <DialogHeader className="mb-3">
              <DialogTitle>{t.form.create_Task}</DialogTitle>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="title-1">{t.table.title}</Label>
                <Input id="title-1" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title..." />
              </Field>
              <Field>
                <Label htmlFor="priority-1">{t.table.priority}</Label>
                <Select value={priority} onValueChange={(value) => setPriority(value as Task["priority"])}>
                  <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent className=" text-right">
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
            <DialogFooter className="pt-4">
              <DialogClose asChild>
                <Button variant="outline">{t.buttons.cancel}</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit">{t.buttons.add}</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
    </Dialog>
  )
}
