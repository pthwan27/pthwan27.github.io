import Link from "next/link";

const gnb = () => (
  <nav className="gnb gnb-light">
    <div className="gnb-container">
      <Link href="/" className="gnb-container__brand">
        pthwan27
      </Link>
      <ul className="gnb-container__navbar">
        <li>
          <Link href="/skill">skill</Link>
        </li>
        <li>
          <Link href="/project">project</Link>
        </li>
        <li>
          <Link href="/education">education</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default gnb;
