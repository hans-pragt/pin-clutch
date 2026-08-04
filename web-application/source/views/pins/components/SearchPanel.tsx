// #region Imports

/* React */
import { useState } from 'react';

/* Clutch */
import { InputGroup } from 'components/input/InputGroup';
import { InputGroupAddOn } from 'components/input/InputGroupAddOn';
import { InputGroupField } from 'components/input/InputGroupField';

import SearchIcon from '@icons/monotone/search.svg?react';
import { Button } from 'components/button/Button';

// #endregion Imports

// #region Component

export function SearchPanel() {

  // #region Query

  const [query, setQuery] = useState<string>('');

  // #endregion Query

  return (
    <div className="p-4">
      <InputGroup>
        <InputGroupAddOn>
          <SearchIcon />
        </InputGroupAddOn>
        <InputGroupField 
          name      = "search-query"
          value     = {query}
          onChange  = {event => setQuery(event.target.value)}
        />
      </InputGroup>
    </div>
  );
}

// #endregion Component