function Button({ text }: { text: string }) {
  return (
    <button className="font-bold bg-darkSlateGrey rounded-lg p-4 w-full text-white">
      {text}
    </button>
  );
}

export default Button;
