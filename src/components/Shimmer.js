const Shimmer = () => {
  return (
    <div className='shimmer-container'>
      {[...Array(12)].map((val, index) => (
        <div key={index} className='shimmer-card'></div>
      ))}
    </div>
  );
};

export default Shimmer;
