import { Link } from "react-router-dom";

export const NavResponsive = ({
  text,
  urlLink,
}: {
  text: string;
  urlLink: string;
}) => {
  return (
    <Link to={urlLink}>
      <li className="w-full cursor-pointer list-none p-4 text-center transition-all hover:bg-sky-400 hover:text-white">
        {text}
      </li>
    </Link>
  );
};
