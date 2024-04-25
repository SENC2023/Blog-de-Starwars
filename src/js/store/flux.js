const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [

			],
			details: [

			],
			character: {

			},
			planets: [

			],
			planet: [

			],
			vehicles: [

			],
			vehicle: [

			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: () => {
				// console.log("Se están obteniendo todos los personajes");
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => setStore({ characters: data.results }))
				.catch(err => console.error(err))
			},
			getCharacter: (id) => {
				// console.log("Se está obteniendo el personaje por id");
				fetch("https://www.swapi.tech/api/people/"+id)
				.then(res => res.json())
				.then(data => setStore({ character: data.result }))
				.catch(err => console.error(err))
			},
			getPlanets: () => {
				// console.log("Se están obteniendo todos los planetas");
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(data => setStore({ planets: data.results }))
				.catch(err => console.error(err))
			},
			getPlanet: (id) => {
				// console.log("Se está obteniendo el planeta por id");
				fetch("https://www.swapi.tech/api/planets/"+id)
				.then(res => res.json())
				.then(data => setStore({ planet: data.result }))
				.catch(err => console.error(err))
			},
			getVehicles: () => {
				console.log("Se están obteniendo todos los vehiculos");
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(res => res.json())
				.then(data => setStore({ vehicles: data.results }))
				.catch(err => console.error(err))
			},
			getVehicle: (id) => {
				console.log("Se está obteniendo un vehiculo por id");
				fetch("https://www.swapi.tech/api/vehicles/"+id)
				.then(res => res.json())
				.then(data => setStore({ vehicle: data.result }))
				.catch(err => console.error(err))
			},
		}
	};
};

export default getState;
