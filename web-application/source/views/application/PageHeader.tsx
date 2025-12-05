// #region Component

export function PageHeader() {
  return (
    <div className="py-2 flex flex-row items-center">

      {/* Application */}
      <span className='flex-1 font-caprasimo text-base-300 text-6xl'>Clutch</span>

      {/* Register */}
      <button className='btn btn-accent btn-lg tracking-wide'>Sign In</button>

    </div>
  );
}

// #endregion Component