import { useContext, useMemo } from 'react';
import { Context as KitContext } from '../../../../context/kit-context';

import Box from '../../../../ui/box/box';

export default function KitNameInput() {
	const context = useContext( KitContext );

	return useMemo( () => (
		<Box spacing={ 16 }>
			<input
				type="text"
				onChange={ ( event ) => context.dispatch( { type: 'SET_TITLE', value: event.target.value } ) }
				defaultValue={ context.kitContent.title }
			/>
		</Box>
	), [] );
}