export default function Footer() {
  return (
    <div className="text-center border-t border-matrix-green mx-5 md:mx-96 pt-5 mt-auto mb-5">
      <p className="text-matrix-green">
        Made with ❤️‍ by{" "}
        <a
          className="font-bold hover:text-white"
          href="https://www.jamescox.dev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          James Cox
        </a>
      </p>
      <p className="text-matrix-green">
        {"Copyright © "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
}
