// #region Component

export function PageHeader() {
  return (
    <div className="py-2 flex flex-row items-center">

      {/* Application */}
      <span className='flex-1 font-["Caprasimo"] text-[color:var(--header-text-color)] text-6xl'>Clutch</span>

      {/* Register */}
      <button className='bg-[#9F81B7] p-2 rounded-xl'>Register</button>

    </div>
  );
}

// #endregion Component