import { Link } from 'react-router-dom';

export const Nav = ({ text, urlLink }: { text: string; urlLink: string }) => {
    return (
        <Link to={urlLink}>
            <ul>
                <li className="my-2 cursor-pointer list-none rounded-md p-2 duration-300 hover:underline hover:underline-offset-4">
                    {text}
                </li>
            </ul>
        </Link>
    );
};
