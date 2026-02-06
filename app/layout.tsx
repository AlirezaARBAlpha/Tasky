import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar";
import "./globals.css";
import { StoreProvider } from "@/lib/store/StoreProvider";
import { ThemeLayoutWrapper } from "@/lib/store/ThemeProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasky | مدیریت هوشمند تسک‌ها",
  description: "اپلیکیشن مدیریت کارهای روزمره با قابلیت شخصی‌سازی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" dir="ltl">
      <body>
        <StoreProvider>
          <ThemeLayoutWrapper>
              <SidebarProvider>
                <AppSidebar />
                  <SidebarTrigger />
                  {children}
              </SidebarProvider>
          </ThemeLayoutWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
