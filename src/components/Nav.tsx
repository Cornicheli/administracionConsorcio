import { Link } from "react-router-dom";

export const Nav = ({ text, urlLink }: { text: string; urlLink: string }) => {
  return (
    <Link to={urlLink}>
      <li className="cursor-pointer list-none rounded-md p-3 transition-all hover:bg-sky-400 hover:text-white">
        {text}
      </li>
    </Link>
  );
};
