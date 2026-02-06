"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useAppDispatch } from "@/hooks/hooks"
import { clearHistory } from "@/lib/features/taskSlice/taskSlice"
import { useTranslation } from "@/hooks/useTranslation"

export default function AccountPage() {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

  return (
    <div className="container w-full justify-items-center max-w-10/10 py-10 px-6">
      <div className="space-y-0.5 justify-self-start mb-6">
        <h2 className="text-2xl font-bold tracking-tight">{t.account.account_setting}</h2>
        <p className="text-muted-foreground">
          {t.account.manage_info}
        </p>
      </div>
      <Separator className="my-6" />
      
      <div className="flex flex-col w-full max-w-5/10 gap-8">
        {/* بخش پروفایل */}
        <Card>
          <CardHeader>
            <CardTitle>{t.account.profile}</CardTitle>
            <CardDescription>{t.account.your_picture_username}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button variant="outline">{t.account.change_picture}</Button>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="username">{t.account.username}</Label>
              <Input id="username" defaultValue="James_Webb" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email">{t.account.email}</Label>
              <Input id="email" defaultValue="james@example.com" disabled />
            </div>
          </CardContent>
          <CardFooter>
            <Button>{t.buttons.save}</Button>
          </CardFooter>
        </Card>

        {/* بخش تنظیمات اضافی */}
        <Card className="border-red-100 dark:border-red-900">
          <CardHeader>
            <CardTitle className="text-red-600">{t.account.danger_zone}</CardTitle>
            <CardDescription>{t.account.sensitive_action}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" onClick={() => dispatch(clearHistory())}>{t.account.clear_history}</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}