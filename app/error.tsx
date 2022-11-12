'use client';

const Error = ({ error, reset }: { error: Error; reset: () => void; }) => {
  console.log({ error });
  return (
    <>
      <h2>Hello World from Error !</h2>
      <button onClick={() => reset()}>Reset error boundary. </button>
    </>
  )
}

export default Error;
