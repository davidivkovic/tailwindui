/* This example requires Tailwind CSS v2.0+ */
const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
