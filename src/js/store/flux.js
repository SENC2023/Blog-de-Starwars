const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [

			],
			details: [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: () => {
				console.log("ESTOY FUNCIONANDO POR FIN :D");
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => setStore({ characters: data.results }))
				.catch(err => console.error(err))
			},
			getDetails: () => {
				console.log("getDetails está funcionando");
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => console.log(data))
				.catch(err => console.error(err))
			}
		}
	};
};

export default getState;
