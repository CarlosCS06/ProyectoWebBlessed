import Link from "next/link";

export default function LeagueCard({ href, icon: Icon, title, description, color }) {
  return (
    <Link
      href={href}
      className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
    >
      <div className="card-body items-center text-center">
        <Icon className={`text-5xl ${color} mb-3`} />
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}
