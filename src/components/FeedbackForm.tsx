import { useState } from "react";
import { MAX_LENGTH } from "../lib/constants";

export default function FeedbackForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.length === 0) {
      return alert("Please enter a message");
    }
    if (!message.includes("#")) {
      return alert("Please include a #hashtag in your message");
    }

    const splitMessage = message.split("#").slice(1);

    const companies = splitMessage.map((sliced) => sliced.split(" ")[0]);

    alert(`Message: ${message}\nCompanies: ${companies.join(", ")}`);

    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        id="feedback-textarea"
        placeholder="textarea"
        spellCheck={false}
        maxLength={MAX_LENGTH}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <label htmlFor="feedback-textarea">
        Add your feedback here with the company #hashtag
      </label>
      <div>
        <p className="u-italic">{MAX_LENGTH - message.length}</p>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
