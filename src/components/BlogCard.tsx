import { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-gold/30 transition-all group">
      <div className="h-48 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center p-6">
        <span className="text-gold/60 text-sm font-semibold uppercase tracking-wider">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <p className="text-text-secondary text-xs mb-3">{formattedDate}</p>
        <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {post.summary}
        </p>
      </div>
    </article>
  );
}
