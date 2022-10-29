import Link from "next/link";

export default function Tags({ tag }) {
  return (
    <Link href={`/tag/${tag.replace(/ /g, "-")}`}>
      <button className="border border-gray-200 p-1">
        <p className="font-OpenSans text-xs text-slate-400 hover:text-gray-600 ">
          {tag}
        </p>
      </button>
    </Link>
  );
}
