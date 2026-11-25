import Link from "next/link";
import { AppLink } from "@/components/app-link";
import { FalconMark } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <FalconMark className="h-12 w-12" />
      <p className="eyebrow mt-8">Error 404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-copy">
        This path is off the map.
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-muted">
        The page you were looking for does not exist. Let us get you back to
        something useful.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-copy transition-colors hover:border-white/30 hover:bg-white/[0.08]"
        >
          Back to home
        </Link>
        <AppLink label="Get the app" />
      </div>
    </div>
  );
}
