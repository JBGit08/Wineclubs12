"use client"

export function LoadingSkeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
}

export function TableSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex space-x-4">
          <LoadingSkeleton className="h-4 w-1/4" />
          <LoadingSkeleton className="h-4 w-1/4" />
          <LoadingSkeleton className="h-4 w-1/4" />
          <LoadingSkeleton className="h-4 w-1/4" />
        </div>
      ))}
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="border rounded-lg p-4 space-y-3">
      <LoadingSkeleton className="h-6 w-3/4" />
      <LoadingSkeleton className="h-4 w-1/2" />
      <LoadingSkeleton className="h-4 w-full" />
      <LoadingSkeleton className="h-4 w-2/3" />
    </div>
  )
}
