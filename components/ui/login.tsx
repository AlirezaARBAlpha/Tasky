"use client"

import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import { login } from "@/lib/features/authSlice/authSlice"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Field, FieldGroup } from "@/components/ui/field"
import { useTranslation } from "@/hooks/useTranslation"

export function LoginDialog() {
  const { t } = useTranslation();
  const dir = useAppSelector((state) => state.auth.dir)
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // شبیه‌سازی تایید اطلاعات
    setTimeout(() => {
      dispatch(login({
        name: "علیرضا", 
        email: email,
        avatar: "https://github.com/shadcn.png"
      }))
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="justify-start w-full px-2">
          {t.sidebar.login}
        </Button>
      </DialogTrigger>
      
      <DialogContent dir={dir} className="sm:max-w-[350px]">
        <form onSubmit={handleLogin}>
          <DialogHeader>
            <DialogTitle>{t.sidebar.welcome}</DialogTitle>
            <DialogDescription>
             {t.sidebar.login_your_account}
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="py-4">
            <Field>
              <Label htmlFor="login-email">{t.account.email}</Label>
              <Input 
                id="login-email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com" 
                required 
              />
            </Field>
            
            <Field>
              <Label htmlFor="login-password">{t.sidebar.password}</Label>
              <Input 
                id="login-password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="gap-2 sm:gap-0">
            <DialogClose asChild>
              <Button className="mr-3" type="button" variant="outline">{t.buttons.cancel}</Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "در حال ورود..." : t.sidebar.login}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}