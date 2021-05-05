export default function Footer() {
  return (
    <div className="text-center border-t border-matrix-green mx-5 pt-5 mt-auto xl:w-1/2 xl:mx-auto">
      <p className="text-matrix-green">
        Made with ❤️‍ by{" "}
        <a
          className="font-bold hover:text-matrix-green-hover"
          href="https://www.jamescox.dev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          James Cox
        </a>
      </p>
      <p className="text-matrix-green pb-5">
        {"Copyright © "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
}
