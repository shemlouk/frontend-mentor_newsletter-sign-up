import IconList from "../assets/images/icon-list.svg";

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex gap-4 items-start">
      <img src={IconList} alt="check icon" />
      <p>{text}</p>
    </li>
  );
}

export default ListItem;
