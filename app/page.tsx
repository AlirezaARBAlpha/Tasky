import { LanguageToggle } from "@/components/ui/language-toggle";
import "./globals.css";
import TaskTable from "@/components/task-table";

export default function Home() {
  return (
    <div className="flex w-full max-w-10/10 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between px-16 bg-white dark:bg-black ">
        <TaskTable/>
        <LanguageToggle/>
      </main>
    </div>
  );
}
