export default function PreparationItem({name, children}) {
    return (
        <li>
            <p><b>{name}:</b> {children}</p>
        </li>
    );
}