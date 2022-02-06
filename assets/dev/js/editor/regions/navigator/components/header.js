import { useCallback, useMemo } from 'react';
import { useElementFolding } from '../hooks';
import Icon from 'elementor-app/ui/atoms/icon';
import PropTypes from 'prop-types';

export function Header( { onClose } ) {
	const [ elementsFolding, setElementsFolding ] = useElementFolding();

	/**
	 * Whether all elements folding state is open.
	 *
	 * @type boolean
	 */
	const isAllOpen = useMemo(
		() => Object.values( elementsFolding ).every( ( state ) => state ),
		[ elementsFolding ]
	);

	/**
	 * Toggle all elements folding state.
	 *
	 * @void
	 */
	const toggleAll = useCallback( () => {
		setElementsFolding( ! isAllOpen );
	}, [ isAllOpen ] );

	return (
		<div id="elementor-navigator__header" role="navigator-header">
			<Icon id="elementor-navigator__toggle-all" className={ isAllOpen ? 'eicon-collapse' : 'eicon-expand' } onClick={ toggleAll } role="toggle-all" />
			<div id="elementor-navigator__header__title">{ __( 'Navigator', 'elementor' ) }</div>
			<Icon id="elementor-navigator__close" className="eicon-close" onClick={ onClose } role="close" />
		</div>
	);
}

Header.propTypes = {
	onClose: PropTypes.func,
};

export default Header;
