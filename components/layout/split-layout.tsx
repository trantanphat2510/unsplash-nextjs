import type React from "react"

interface SplitLayoutProps {
  left: React.ReactNode
  right: React.ReactNode
}

export default function SplitLayout({ left, right }: SplitLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {left}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">{right}</div>
    </div>
  )
}
