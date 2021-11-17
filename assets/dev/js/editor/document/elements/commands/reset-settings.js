import CommandHistory from '../../commands/base/command-history';

export class ResetSettings extends CommandHistory {
	validateArgs( args ) {
		this.requireContainer( args );
	}

	getHistory( args ) {
		const { containers = [ args.container ], silent = false } = args;

		return silent && {
			containers,
			type: 'reset_settings',
		};
	}

	apply( args ) {
		const { containers = [ args.container ], settings = [] } = args;

		containers.forEach( ( container ) => {
			const controls = Object.entries( container.settings.controls ),
				defaultValues = {};

			controls.forEach( ( [ controlName, control ] ) => {
				// If settings were specific, restore only them.
				if ( settings && settings.length ) {
					if ( ! settings.find( ( key ) => key === controlName ) ) {
						return;
					}
				}

				defaultValues[ controlName ] = control.default;
			} );

			$e.run( 'document/elements/settings', {
				container,
				settings: defaultValues,
			} );

			container.render();
		} );
	}
}

export default ResetSettings;
