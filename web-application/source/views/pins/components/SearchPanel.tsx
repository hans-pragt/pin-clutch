// #region Imports

/* React */
import { useState } from 'react';

/* Clutch */
import { InputGroup } from 'components/input/InputGroup';
import { InputGroupAddOn } from 'components/input/InputGroupAddOn';
import { InputGroupField } from 'components/input/InputGroupField';
import { Button } from 'components/button/Button';

import CloseIcon from '@icons/monotone/close.svg?react';
import SearchIcon from '@icons/monotone/search.svg?react';

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
          <SearchIcon className="size-6" />
        </InputGroupAddOn>
        <InputGroupField 
          name      = "search-query"
          value     = {query}
          onChange  = {event => setQuery(event.target.value)}
        />
        {
          query &&
          <InputGroupAddOn position="end">
            <Button 
              size      = "icon-sm"
              kind      = "ghost"
              onClick   = {() => setQuery('')}
            >
              <CloseIcon />
            </Button>
          </InputGroupAddOn>
        }
      </InputGroup>
    </div>
  );
}

// #endregion Component