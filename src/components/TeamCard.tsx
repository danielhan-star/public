import { TeamMember } from "@/lib/types";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="text-center group">
      <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
        <span className="text-2xl font-bold text-gold">{initials}</span>
      </div>
      <h3 className="text-lg font-bold text-navy">{member.name}</h3>
      <p className="text-gold text-sm font-medium mt-1">{member.role}</p>
      <p className="text-text-secondary text-sm mt-3 leading-relaxed">
        {member.bio}
      </p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-navy/50 hover:text-navy transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      )}
    </div>
  );
}
