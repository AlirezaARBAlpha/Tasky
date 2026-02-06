"use client"

import { useState } from "react"
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
import { useAppSelector } from "@/hooks/hooks"

export function SignUpDialog() {
  const dir = useAppSelector((state) => state.auth.dir)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation();
  
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // شبیه‌سازی عملیات ثبت‌نام
    setTimeout(() => {
      setIsLoading(false)
      console.log("User registered!")
    }, 1500)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="justify-start w-full px-2">{t.sidebar.signup}</Button>
      </DialogTrigger>
      
      <DialogContent dir={dir} className="sm:max-w-[400px]">
        <form onSubmit={handleSignUp}>
          <DialogHeader>
            <DialogTitle className="text-xl">{t.sidebar.create_account}</DialogTitle>
            <DialogDescription>
              {t.sidebar.login_features}
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="py-6">
            <Field>
              <Label htmlFor="signup-name">{t.form.full_name}</Label>
              <Input id="signup-name" required />
            </Field>
            
            <Field>
              <Label htmlFor="signup-email">{t.account.email}</Label>
              <Input id="signup-email" type="email" placeholder="email@example.com" required />
            </Field>
            
            <Field>
              <Label htmlFor="signup-password">{t.sidebar.password}</Label>
              <Input id="signup-password" type="password" required />
            </Field>
          </FieldGroup>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="flex-1">
                {t.buttons.cancel}
              </Button>
            </DialogClose>
            <Button type="submit" className="flex-1" disabled={isLoading}>
              {isLoading ? "در حال ثبت..." : t.sidebar.signup}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}