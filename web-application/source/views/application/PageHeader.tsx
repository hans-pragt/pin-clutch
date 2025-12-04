// #region Component

export function PageHeader() {
  return (
    <div className="py-2 flex flex-row items-center">

      {/* Application */}
      <span className='flex-1 font-caprasimo text-minty-500 text-6xl'>Clutch</span>

      {/* Register */}
      <button className='bg-mandarin-500 text-lg tracking-wide text-tan-100 px-4 py-2 rounded-xl'>Sign In</button>

    </div>
  );
}

// #endregion Component