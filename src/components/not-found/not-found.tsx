const NotFound = (): JSX.Element => {
  return (
    <>
      <h2>Page Not Found</h2>
      <p>Sorry, the page was not found.</p>
      <a className="back-link" href="/">
        Back
      </a>
    </>
  );
};

export { NotFound };
