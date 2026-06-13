import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { RecentPosts } from "@/components/sections/RecentPosts";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <FeaturedProjects />
      <RecentPosts />
    </div>
  );
}
