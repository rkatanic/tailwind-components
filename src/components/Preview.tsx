interface Props {
  component: JSX.Element | any;
  title: string;
  alignInCenter?: boolean;
}

const Preview = ({ component, title, alignInCenter }: Props): JSX.Element => (
  <div className="w-full m-auto max-w-5xl">
    <h1 className="mb-4 text-md font-medium text-gray-900">{title}</h1>
    <div
      className={`rounded-lg overflow-hidden border border-gray-200   ${
        alignInCenter ? "flex justify-center p-10  items-center" : ""
      }`}
    >
      {component}
    </div>
  </div>
);

export default Preview;
