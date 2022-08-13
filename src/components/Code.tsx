import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import prettyFormat, { plugins } from "pretty-format";
import renderer from "react-test-renderer";

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
    <SyntaxHighlighter showLineNumbers language="jsx" style={atomDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default Code;
