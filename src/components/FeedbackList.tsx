import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>123</span>
        </button>
        <div>
          <p>T</p>
        </div>
        <div>
          <p>Company</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis
            voluptatibus accusamus dolores nemo. Perferendis!
          </p>
        </div>

        <p>1d</p>
      </li>
    </ol>
  );
}
