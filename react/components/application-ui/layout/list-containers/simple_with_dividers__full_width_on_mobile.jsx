/* This example requires Tailwind CSS v2.0+ */
const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul className="divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="px-4 py-4 sm:px-0">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
