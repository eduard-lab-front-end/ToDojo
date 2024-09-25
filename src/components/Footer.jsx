import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fixed-bottom bg-transparent text-center border-custom">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            to='error'
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            to='error'
            role="button"
          >
            <i className="bi bi-twitter"></i>
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            to='error'
            role="button"
          >
            <i className="bi bi-google"></i>
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            to='error'
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            to='error'
            role="button"
          >
            <i className="bi bi-linkedin"></i>
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            to='error'
            role="button"
          >
            <i className="bi bi-github"></i>
          </Link>
        </section>
      </div>

      <div
        className="text-center p-3 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05" }}
      >
        © 2024 Copyright:
        <Link className="text-white text-decoration-none" to="error">
          {' '} Ironhackers.com
        </Link>
      </div>
    </footer>
  );
}
