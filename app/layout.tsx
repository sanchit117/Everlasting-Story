import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-primary text-primary-foreground p-4">
            <nav className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">Everlasting Stories</Link>
              <div className="space-x-4">
                <Link href="/how-it-works" className="text-sm font-medium">How It Works</Link>
                <Link href="/preview" className="text-sm font-medium">Preview</Link>
                <Link href="/support" className="text-sm font-medium">Support</Link>
                <Button variant="secondary" size="sm" asChild>
                  <Link href="/interview">Get Started</Link>
                </Button>
              </div>
            </nav>
          </header>
          <main className="flex-grow container mx-auto py-8 px-4">
            {children}
          </main>
          <footer className="bg-muted p-4 text-center">
            <p>&copy; 2025 Everlasting Stories. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'