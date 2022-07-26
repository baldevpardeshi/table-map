import { useLayoutEffect, useRef, useState } from 'react';
const people = [
  {
    "id": 1,
    "name": "Andrews Phillip",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Sam X Williams"
  },
  {
    "id": 2,
    "name": "Dillard Mauleen",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Andy Anthony"
  },
  {
    "id": 3,
    "name": "Miller Jessica",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Mark Twian"
  },
  {
    "id": 4,
    "name": "Marcus Brownless",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Phillip Melo"
  },
  {
    "id": 5,
    "name": "Jake Peralta",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Andy Anthony"
  },
  {
    "id": 6,
    "name": "Adam Lewy",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Andy Anthony"
  },
  {
    "id": 7,
    "name": "Anthony Hopkins",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Terry Christie"
  },
  {
    "id": 8,
    "name": "Sebastian Vettel",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "George Lecrec"
  },
  {
    "id": 9,
    "name": "John Ralfion",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Andy Anthony"
  },
  {
    "id": 10,
    "name": "Leslie Knope",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "April Ludgate"
  },
  {
    "id": 11,
    "name": "Rom Swanson",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Andrew Bernard"
  },
  {
    "id": 12,
    "name": "Jimothy Halpert",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Jack Ryan"
  },
  {
    "id": 13,
    "name": "Michael Scott",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Prison Mike"
  },
  {
    "id": 14,
    "name": "Walter White",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Albert S Crews"
  },
  {
    "id": 15,
    "name": "Sheldon Cooper",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Craig McMullam"
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Table = () => {
  const checkbox = useRef()
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState([])

  useLayoutEffect(() => {
    const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < people.length
    setChecked(selectedPeople.length === people.length)
    setIndeterminate(isIndeterminate)
    // checkbox.current.indeterminate = isIndeterminate
  }, [selectedPeople])

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  return (
    <div className="table-section">
      <div>
        <h2 className="table__heading">Immunization Alerts</h2>
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center">
            <label className="form__label">Find</label>
            <input type="text" className="form__input" />
          </div>
          <button type="submit" value="Delete" className="button-primary">Delete</button>
        </div>
      </div>
      {selectedPeople.length > 0 && (
        <div className="sr-only absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
          <button
            type="button"
            className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Bulk edit
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Delete all
          </button>
        </div>
      )}
      <table className="table">
        <thead className="table__head">
          <tr>
            <th scope="col" className="relative px-2.5 py-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                ref={checkbox}
                checked={checked}
                onChange={toggleAll}
              />
            </th>
            <th scope="col" className="min-w-[12rem] px-2.5 py-2 text-left text-sm font-semibold">
              Name
            </th>
            <th scope="col" className="px-2.5 py-2 text-left text-sm font-semibold">
              Description
            </th>
            <th scope="col" className="px-2.5 py-2 text-left text-sm font-semibold">
              Web Reference
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {people.map((person) => (
            <tr key={person.email} className={selectedPeople.includes(person) ? 'bg-gray-50' : undefined}>
              <td className="relative px-2.5 py-1">
                {selectedPeople.includes(person) && (
                  <div className="absolute inset-y-0 left-0 w-0.5 bg-green-500" />
                )}
                <input
                  type="checkbox"
                  className=" h-4 w-4 rounded border-gray-300 text--green-500 focus:ring-green-500 sm:left-6"
                  value={person.email}
                  checked={selectedPeople.includes(person)}
                  onChange={(e) =>
                    setSelectedPeople(
                      e.target.checked
                        ? [...selectedPeople, person]
                        : selectedPeople.filter((p) => p !== person)
                    )
                  }
                />
              </td>
              <td
                className={classNames(
                  'whitespace-nowrap px-2.5 py-1 table__text',
                  selectedPeople.includes(person) ? 'text-green-500' : 'text-black'
                )}
              >
                {person.name}
              </td>
              <td className="whitespace-nowrap px-2.5 py-1 table__text">{person.description}</td>
              <td className="whitespace-nowrap px-2.5 py-1 table__text">{person.webReference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;