type ButtonProps = { text?: string } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="font-bold bg-darkSlateGrey cursor-pointer rounded-lg disabled:bg-charcoalGrey disabled:cursor-not-allowed p-4 w-full text-white transition enabled:hover:bg-gradient-to-r enabled:hover:from-[#FF527C] enabled:hover:to-[#FF6A39] relative enabled:hover:before:absolute enabled:hover:before:w-full enabled:hover:before:h-full enabled:hover:before:bg-black enabled:hover:before:top-0 enabled:hover:before:left-0 z-10 enabled:hover:before:-z-10 enabled:hover:before:bg-gradient-to-r enabled:hover:before:from-[#FF527C] enabled:hover:before:to-[#FF6A39] enabled:hover:before:blur"
    >
      {props.text}
    </button>
  );
}

export default Button;
