interface Props {
  component: JSX.Element | any;
  title: string;
  alignInCenter?: boolean;
  withoutPadding: boolean;
}

const Preview = ({
  component,
  title,
  alignInCenter,
  withoutPadding,
}: Props): JSX.Element => (
  <div className="h-full w-full m-auto max-w-5xl">
    <h1 className="mb-4 text-md font-medium text-gray-900 dark:text-zinc-300">
      {title}
    </h1>
    <div
      className={`relative rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-700 ${
        withoutPadding ? "" : "p-10"
      }  ${alignInCenter ? "flex justify-center items-center" : ""}`}
    >
      {component}
    </div>
  </div>
);

export default Preview;
