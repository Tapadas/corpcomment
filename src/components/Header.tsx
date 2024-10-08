import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";

export default function Header() {
  return (
    <header>
      <Pattern />
      <div className="header-content">
        <Logo />
        <PageHeading />
        <FeedbackForm />
      </div>
    </header>
  );
}
