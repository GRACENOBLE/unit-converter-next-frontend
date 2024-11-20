const Output = ({ loading, output }: { loading: boolean; output: string }) => {
  return (
    <div className="border rounded-lg max-w-[350px] md:w-96 h-16 mb-8 md:mb-0 md:h-60 grid place-items-center text-4xl font-bold">
      {loading ? <LoadingIndicator /> : output}
    </div>
  );
};

const LoadingIndicator = () => <div className="animate-pulse">Thinking...</div>;

export default Output;
