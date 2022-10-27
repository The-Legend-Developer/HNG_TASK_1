function LinkCard({ id, title, href }) {
  return (
    <a id={id} className="rounded-md bg-gray-400 text-center py-5" href={href}>
      {title}
    </a>
  );
}

export default LinkCard;
