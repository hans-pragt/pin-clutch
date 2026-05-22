// #region Imports

/* Clutch */
import { Button } from 'components/input/Button';

// #endregion Imports

// #region Properties

// #endregion Properties

// #region Component

export function ProfileMenu() {
  return (
    <div className="relative">

      {/* Trigger */}
      <Button
        kind    = "accent"
        label   = "hpragt@gmail.com"
      />

      {/* Menu */}
      <div className="absolute origin-top-right right-0 w-56 mt-2 rounded-xl border-4 border-shadow-500 shadow-high">
        Test
      </div>

    </div>
  );
}

// #endregion Component