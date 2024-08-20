import { Html } from "@react-email/components";

const EmailTemplate = ({ content }) => {
  return (
    <Html lang="en">
      <div style={{ fontFamily: "Arial, sans-serif", color: "black", backgroundColor: "white" }}>
        <h1>{content[1]}</h1>
        <p>{content[2]}</p>
      </div>
    </Html>
  );
};

export default EmailTemplate