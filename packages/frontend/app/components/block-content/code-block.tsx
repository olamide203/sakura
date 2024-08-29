import { Highlight } from "prism-react-renderer";
import catpuccin from "./catpuccin";
import { ScrollArea } from "~/components/ui/scroll-area";
import CopyToClipboard from "react-copy-to-clipboard";
import { ClipboardText } from "@phosphor-icons/react/ClipboardText";

interface Value {
  filename: string;
  language: string;
  code: string;
}

interface CodeBlockProps {
  value: Value;
}

const CodeBlock = ({ value }: CodeBlockProps) => {
  return (
    <Highlight theme={catpuccin} code={value.code} language={value.language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="my-4">
          <div className="text-sm text-[#5c5f77] px-4 py-2 h-9 bg-[#bcc0cc] rounded-t-md flex justify-between">
            {value.filename && <span>{value.filename}</span>}
            {value.language && <span>{value.language}</span>}
          </div>
          <ScrollArea className="w-full max-w-screen-lg mx-auto rounded-b-md overflow-hidden shadow-md bg-[	#eff1f5]">
            <CopyToClipboard text={value.code}>
              <button className="absolute right-6 top-4 flex items-center justify-center bg-[#8c8fa1]/10 p-2 rounded text-neutral-800 hover:bg-[#8c8fa1]/30 transition-colors">
                <ClipboardText className="" />
              </button>
            </CopyToClipboard>
            <pre className={`${className} p-4`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </ScrollArea>
        </div>
      )}
    </Highlight>
  );
};

export default CodeBlock;
