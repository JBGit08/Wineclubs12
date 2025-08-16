export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="h-16 bg-slate-100 animate-pulse" />

      {/* Hero Skeleton */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-12 bg-slate-200 rounded-lg mb-6 animate-pulse" />
          <div className="h-6 bg-slate-200 rounded-lg mb-4 animate-pulse max-w-2xl mx-auto" />
          <div className="h-6 bg-slate-200 rounded-lg mb-8 animate-pulse max-w-xl mx-auto" />
          <div className="flex gap-4 justify-center">
            <div className="h-12 w-32 bg-slate-200 rounded-lg animate-pulse" />
            <div className="h-12 w-32 bg-slate-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-100 rounded-lg p-6 animate-pulse">
                <div className="h-48 bg-slate-200 rounded-lg mb-4" />
                <div className="h-6 bg-slate-200 rounded mb-2" />
                <div className="h-4 bg-slate-200 rounded mb-4" />
                <div className="space-y-2">
                  <div className="h-3 bg-slate-200 rounded" />
                  <div className="h-3 bg-slate-200 rounded" />
                  <div className="h-3 bg-slate-200 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
