import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prettyFormat, { plugins } from "pretty-format";
import renderer from "react-test-renderer";
import codestyles from "../codestyles/codestyles";

const { ReactTestComponent } = plugins;

interface Props {
  component: JSX.Element;
}

const Code = ({ component }: Props): JSX.Element => {
  const code = prettyFormat(renderer.create(component), {
    plugins: [ReactTestComponent],
    printFunctionName: false,
  });
  return (
    <div className="border dark:border-gray-700 rounded">
      <SyntaxHighlighter
        showLineNumbers
        language="jsx"
        style={codestyles as any}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
