import { Html } from "@react-email/components";

export interface ITemplateProps { 
  message: string[];
  [key: string]: string | number | string[]
}

const BaseTemplate = ({ message }: ITemplateProps) => {
  return (
    <Html lang="en">
      <div style={{
        fontFamily: "Arial, sans-serif", 
        color: "#333333", 
        backgroundColor: "#f7f7f7", 
        padding: "20px", 
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "8px"
        }}>
          {message.map((paragraph, key) => (
            <p key={key} style={{ lineHeight: "1.6", marginBottom: "16px" }}>
              {paragraph}
            </p>
          ))}
          <p style={{ fontWeight: "bold", marginTop: "24px" }}>The Tehcville Team</p>
          <p style={{ fontSize: "12px", color: "#888888", marginTop: "8px" }}>
            © {new Date().getFullYear()} Tehcville
          </p>
        </div>
      </div>
    </Html>
  )
}

export default BaseTemplate;