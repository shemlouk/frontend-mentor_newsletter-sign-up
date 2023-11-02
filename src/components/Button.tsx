function Button({ text }: { text: string }) {
  return (
    <button className="font-bold bg-darkSlateGrey rounded-lg p-4 w-full text-white transition hover:bg-gradient-to-r hover:from-[#FF527C] hover:to-[#FF6A39] relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-black hover:before:top-0 hover:before:left-0 z-10 hover:before:-z-10 hover:before:bg-gradient-to-r hover:before:from-[#FF527C] hover:before:to-[#FF6A39] hover:before:blur">
      {text}
    </button>
  );
}

export default Button;
